import { PrismaClient } from '@prisma/client'

// Reuse clients within warm function invocations.
// Production also needs an external MySQL pooler / connection cap.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }
export const prisma = globalForPrisma.prisma ?? new PrismaClient()
globalForPrisma.prisma = prisma
