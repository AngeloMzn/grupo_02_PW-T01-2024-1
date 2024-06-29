"use client"
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Contact from "./Contact";


export default function ContactDetails(){
    return (
        <div className="flex flex-col gap-4">
            <Contact description={"@angelomazarin"}>
                <InstagramIcon />
            </Contact>
            <div className="flex items-center gap-2">
                <Contact description="angelomazarin">
                    <FacebookIcon />
                </Contact>
            </div>
            <div className="flex items-center gap-2">
                <Contact description="+55 67 99303-0778">
                    <WhatsAppIcon />
                </Contact>
            </div>
            <div className="flex items-center gap-2">
                <Contact description="angelo.mazarin@gmail.com">
                    <MailOutlineIcon />
                </Contact>
            </div>
        </div>
    );
};
