"use client"

import { Button } from "@/components/ui/button"; // Import Button from ShadCN
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"; // ShadCN UI components for Card
import Image from "next/image";
import { google } from "../svg";
import { useRouter } from "next/navigation";

export default function SignUpCard() {

    const auth = () => {
        router.push('reach-in-box-gold.vercel.app/dashboard')
    }
    const router = useRouter();
    return (
        <div className="h-[312px] w-[460px] border-[1px] border-[#343A40] rounded-[17px] p-[40px] pt-[24px] flex gap-[48px] bg-gradient-to-l from-card1 to-card2">

            <div className="flex flex-col justify-center items-center gap-[24px]">
                <div className="h-[103px] w-[380px] flex flex-col gap-[32px]">
                    <div className="h-[103px] w-[380px] flex flex-col gap-[24px]">

                        <div className=" h-[31px] w-[380px] text-center text-white leading-[31px] font-[600px] font-sans size-[20px]">
                            Create a new account
                        </div>

                        <div className="h-[48px] w-[380px] flex gap-[16px]">
                            <button onClick={auth}>
                                <div className="h-[48px] w-[380px] flex gap-[10px] border-[1px] border-[#707172] rounded-[4px] py-[8px] px-[16px] items-center justify-center cursor-pointer">
                                    <Image src={google} alt="google" height={21} width={16} />
                                    <div className="font-[400px] text-[16px] leading-[26.1px] text-center text-white">
                                        Sign Up with Google
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-[97px] w-[380px] flex  flex-col gap-[24px] justify-center items-center">
                    <button
                        className="h-[48px] w-[195px] rounded-[4px] py-[13px] px-[30px] flex gap-[10px] bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] font[600] text-[16px] leading-[21.7px] text-white font-sans"
                    >
                        Create an Account
                    </button>

                    <div className="h-[25px] w-[380px] flex items-center justify-center">
                        <div className="h-[25px] w-[248px] flex gap-[4px] font-sans text-[#909296] text-center">
                            Already have an account? <span className="text-[#C1C2C5] font-medium">Sign In</span>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}
