import React from "react";
import SlickSlider from "../components/SlickSlider";

function RechargeCard({ src, mode, service1, service2 }) {
  return (
    <div className="w-[150px] pl-5 py-5 rounded-xl hover:bg-gray-500 hover:bg-opacity-15 duration-300">
      <img src={src} className="h-16 w-16 mb-4" />
      <div className="text-lg leading-6">
        <div className="font-semibold">{mode}</div>
        <div className="font-bold">
          <div>{service1}</div>
          <div className="flex items-end">
            {service2}
            <img src="/img/forwardArrow.svg" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Header */}
      <div className="flex py-[20px] px-[150px] justify-between items-center text-lg font-semibold sticky top-0 z-20 bg-[#ffffff] shadow-sm shadow-gray-200 overflow-hidden">
        {/* logo */}
        <div>
          <img src="/img/logo.svg" alt="logo" className="h-[70px]" />
        </div>
        {/* middle fields  */}
        <div className="flex justify-around w-full px-8">
          <div>Paytm for Consumer</div>
          <div>Paytm For Business</div>
          <div>Investor Relations</div>
          <div>Company</div>
          <div>Career</div>
        </div>
        {/* signin button  */}
        <div className="w-[150px] flex items-center justify-center bg-[#00BAF2] hover:bg-[#002970] cursor-pointer rounded-3xl py-1  text-center">
          <div className="text-white px-2">Sign in</div>
          <img
            src="/img/profile.svg"
            alt="profile"
            className="rounded-full"
            height={40}
            width={40}
          />
        </div>
      </div>
      {/* slider section  */}
      <div className="w-full bg-[#E0F5FD] px-[130px] py-[60px]">
        <SlickSlider />
      </div>
      {/* Recharge & Pay Bills on Paytm section.  */}
      <div className="w-full bg-[#00BAF2] px-[130px] py-[60px] text-white">
        <div className="text-4xl font-bold mb-10">
          Recharge & Pay Bills on Paytm.
        </div>
        <div className="flex justify-between">
          <RechargeCard
            src="/img/phoneRecharge.png"
            mode="Recharge"
            service1="Prepaid"
            service2="Mobile"
          />
          <RechargeCard
            mode="Pay"
            service1="Electricity"
            service2="Bill"
            src="/img/electricityBill.png"
          />
          <RechargeCard
            mode="Recharge"
            service1="DTH"
            service2="Connection"
            src="/img/DTH.png"
          />
          <RechargeCard
            mode="Book"
            service1="Gas"
            service2="Cylinder"
            src="/img/Cylinder.png"
          />
          <RechargeCard
            mode="Pay"
            service1="Broadband &"
            service2="Landline Bill"
            src="/img/wifi.png"
          />
          <RechargeCard
            mode="Pay"
            service1="Education"
            service2="Fee"
            src="/img/EduFee.png"
          />
          <RechargeCard
            mode="All"
            service1="Payment"
            service2="Services"
            src="/img/AllPayment.png"
          />
        </div>
      </div>
      {/* India's Most-loved Payments App Section */}
      <div className="pl-[130px] pt-[100px] pb-[60px] text-white flex justify-between">
        {/* left side content  */}
        <div>
          <img
            src="/img/sec3paytm.avif"
            alt="sec3paytm.avif"
            height={80}
            width={80}
          />
          <div className="py-10 w-[450px]">
            <div className="text-black text-[50px] font-bold leading-tight">
              India's Most-loved Payments App
            </div>
            <div className="text-black text-xl font-semibold py-4 leading-7">
              Recharge & pay bills, book flights & movie tickets, invest in
              stocks & mutual funds, and do a lot more.
            </div>
          </div>
          <div className="bg-black rounded-3xl w-[260px] h-10 flex justify-between items-center px-6 font-semibold cursor-pointer">
            <div>Download Paytm App </div>
            <img src="/img/apple.svg" alt="apple" className="h-5 w-5" />
            <img src="/img/playstore.svg" alt="playstore" className="h-5 w-5" />
          </div>
        </div>
        <div>
          <img
            src="/img/sec3PaytmMobile.avif"
            alt="sec3PaytmMobile.avif"
            height={484}
            width={528}
          />
        </div>
      </div>
    </>
  );
}
