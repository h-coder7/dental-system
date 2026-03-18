const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcryptjs")

const prisma = new PrismaClient()

async function main() {
    // عمل أول مركز
    const clinic = await prisma.clinic.create({
        data: {
            name: "مركز الأسنان النموذجي",
            phone: "01000000000",
            isActive: true,
            subscriptionEnd: new Date("2027-01-01"),
        },
    })

    console.log("✅ المركز اتعمل:", clinic.name)

    // عمل Super Admin
    const hashedPassword = await bcrypt.hash("admin123", 10)

    const admin = await prisma.user.create({
        data: {
            name: "Super Admin",
            email: "admin@dental.com",
            password: hashedPassword,
            role: "SUPER_ADMIN",
            clinicId: clinic.id,
        },
    })

    console.log("✅ الأدمن اتعمل:", admin.email)
    console.log("✅ الباسورد:", "admin123")
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })