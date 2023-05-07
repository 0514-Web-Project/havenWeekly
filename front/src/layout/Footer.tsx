import React from "react";

export default function Footer() {
  return (
    <div className="py-[40px] mt-[30px] w-full text-center border-t-[1px] border-solid border-[#fff]">
      <div className="flex gap-x-[32px] justify-center">
        <img
          className="cursor-pointer"
          src="/images/icon_mail.svg"
          alt="mail"
        />
        <img
          className="cursor-pointer"
          src="/images/icon_talk.svg"
          alt="talk"
        />
        <a
          href="https://github.com/0514-Web-Project/havenWeekly"
          target="_blank"
        >
          <img src="/images/icon_github.svg" alt="github" />
        </a>
      </div>
      <div className="mt-[14px]">
        2023 © havenWeekly All rights reserved. havenWeekly is not associated
        with NEXON Korea.
      </div>
    </div>
  );
}
