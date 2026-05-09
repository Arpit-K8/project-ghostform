import {resend} from '@/lib/resend';
import VerificationEmail from '../../emails/VerificationEmail';
import { ApiResponse } from '@/types/ApiResponse';

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {
        const resp = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'GhostForm | Verify your email',
            react: VerificationEmail({ username, otp: verifyCode }),
        });

        console.log('Resend response:', resp);

        return {
            success: true,
            message: 'Verification email sent successfully.'
        };
    } catch (error: any) {
        // Try to extract useful information from provider error
        const errMessage = error?.message || String(error);
        const providerInfo = error?.response || error?.body || null;

        console.error('Error sending verification email:', errMessage, providerInfo);

        return {
            success: false,
            message: `Failed to send verification email: ${errMessage}`
        };
    }
}