import prisma from "../utils/prisma";

export class PaymentService {
  public async uploadSlip(data: {
    booking_id: number;
    user_id: number;
    payment_method: string;
    slip_url: string;
  }) {
    const booking = await prisma.bookings.findFirst({
      where: {
        booking_id: data.booking_id,
        user_id: data.user_id,
      },
      include: { payments: true },
    });

    if (!booking) throw new Error("BOOKING_NOT_FOUND");
    if (booking.booking_status === "CANCELLED") throw new Error("BOOKING_CANCELLED");

    const existing = booking.payments[0];
    if (existing) {
      return prisma.payments.update({
        where: { payment_id: existing.payment_id },
        data: {
          payment_method: data.payment_method,
          payment_status: "PENDING",
          amount: booking.total_price,
          slip_url: data.slip_url,
          payment_date: new Date(),
        },
      });
    }

    return prisma.payments.create({
      data: {
        booking_id: data.booking_id,
        payment_method: data.payment_method,
        payment_status: "PENDING",
        amount: booking.total_price,
        slip_url: data.slip_url,
      },
    });
  }

  public async getByBooking(booking_id: number, user_id: number) {
    const booking = await prisma.bookings.findFirst({
      where: { booking_id, user_id },
      include: { payments: true },
    });

    if (!booking) throw new Error("BOOKING_NOT_FOUND");
    return booking.payments[0] ?? null;
  }
}
