export function PaymentProcessingInfo() {
  return (
    <div className="space-y-4">
      <p>Lexova processes payments for lawyers through our secure payment system. Here's what you need to know:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Payments are processed every Monday for the previous week's completed work.</li>
        <li>Our payment processor charges a 2.9% + $0.30 fee for each transaction.</li>
        <li>You can choose to have payments deposited to your bank account or sent via check.</li>
        <li>For tax purposes, you'll receive a 1099 form for all payments processed through our system.</li>
        <li>If you have any questions about payments, please contact our support team at support@lexova.com.</li>
      </ul>
      <p>
        For more detailed information about our payment processes, please refer to our{" "}
        <a href="/payment-terms" className="text-blue-600 hover:underline">
          Payment Terms and Conditions
        </a>
        .
      </p>
    </div>
  )
}

