import { Resend } from "resend";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");

// Try to load .env file if it exists
try {
  dotenv.config({ path: resolve(rootDir, ".env") });
} catch (e) {
  // .env file might not exist, that's okay
}

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || "Le Social <onboarding@resend.dev>";
const TEST_EMAIL_TO = "info@socialbar.ca";

async function testEmail() {
  console.log("🧪 Testing Resend email configuration...\n");

  // Check if API key is set
  if (!RESEND_API_KEY) {
    console.error("❌ ERROR: RESEND_API_KEY is not set!");
    console.log("\nPlease set it in your environment:");
    console.log("  export RESEND_API_KEY=re_your_api_key_here");
    console.log("\nOr create a .env file with:");
    console.log("  RESEND_API_KEY=re_your_api_key_here");
    process.exit(1);
  }

  console.log("✅ RESEND_API_KEY found");
  console.log(`📧 From: ${EMAIL_FROM}`);
  console.log(`📬 To: ${TEST_EMAIL_TO}\n`);

  // Initialize Resend
  const resend = new Resend(RESEND_API_KEY);

  // Send test email
  try {
    console.log("📤 Sending test email...");
    
    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: TEST_EMAIL_TO,
      subject: "Test Email - Le Social Reservation Form",
      html: `
        <h2>Test Email - Configuration Successful! ✅</h2>
        <p>This is a test email to verify that your Resend configuration is working correctly.</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <p>If you received this email, your reservation form is ready to send emails!</p>
      `,
      text: `
Test Email - Configuration Successful!

This is a test email to verify that your Resend configuration is working correctly.

Timestamp: ${new Date().toISOString()}

If you received this email, your reservation form is ready to send emails!
      `,
    });

    if (error) {
      console.error("❌ Error sending email:", error);
      process.exit(1);
    }

    console.log("✅ Email sent successfully!");
    console.log(`📧 Email ID: ${data?.id}`);
    console.log("\n🎉 Your Resend configuration is working correctly!");
    console.log("   Check the inbox at info@socialbar.ca");
    
  } catch (error) {
    console.error("❌ Failed to send email:", error.message);
    if (error.message.includes("API key")) {
      console.log("\n💡 Tip: Make sure your API key is correct and starts with 're_'");
    }
    process.exit(1);
  }
}

testEmail();

