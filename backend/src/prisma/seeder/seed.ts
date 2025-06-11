import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
    // 1. Tạo Roles
    const adminRole = await prisma.roles.createMany({
        data: [
            {
                id: 1,
                name: 'Admin',

            },
            {
                id: 2,
                name: "Student"
            },
            {
                id: 3,
                name: "Teacher"
            }
        ]
    })


    // 2. Tạo User
    const user = await prisma.users.upsert({
        where: { email: 'admin@gmail.com' },
        update: {},
        create: {
            role_id: 1,
            name: 'Admin',
            phone: '0909794351',
            email: 'admin@gmail.com',
            password: '123456',
        },
    })

    // 3. Tạo Category gốc
    const category = await prisma.categories.create({
        data: {
            name: 'Lập trình',
            slug: 'lap-trinh',
            is_parent: true,
            sub_categories_id: 1,
        },
    })

    // 4. Tạo Test mẫu
    const test = await prisma.tests.create({
        data: {
            name: 'Test NodeJS Cơ Bản',
            slug: 'test-nodejs',
            categories_id: category.id,
            create_by: user.id,
            description: 'Kiểm tra kiến thức cơ bản về NodeJS',
            image_thumbnail: 'assets/tests/nodejs.png',
        },
    })

    // 5. Tạo Question và Answer
    const question = await prisma.questions.create({
        data: {
            create_by: user.id,
            question: 'Node.js là gì?',
        },
    })

    await prisma.answers.create({
        data: {
            question_id: question.id,
            answer_text: 'Một nền tảng chạy JavaScript phía server.',
            is_answer: true,
        },
    })

    await prisma.test_Question.create({
        data: {
            question_id: question.id,
            test_id: test.id,
        },
    })

    console.log('Seed dữ liệu thành công!')
}


main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
