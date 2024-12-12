import React from "react";
import SlickSlider from "../components/SlickSlider";

function RechargeCard({ src, mode, service1, service2, line }) {
  return (
    <div
      className={
        line
          ? "w-[150px] pl-5 py-5 rounded-xl hover:bg-gray-500 hover:bg-opacity-15 duration-300"
          : "w-[150px] pl-5 py-5 rounded-xl hover:bg-[#0D3E80]  duration-300 "
      }
    >
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
        <div className="w-[130px] items-center justify-center bg-[#00BAF2] hover:bg-[#002970] cursor-pointer rounded-3xl py-1  text-center">
          <div className="text-white text-lg px-2">Sign in</div>
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
            line={1}
          />
          <RechargeCard
            mode="Pay"
            service1="Electricity"
            service2="Bill"
            src="/img/electricityBill.png"
            line={1}
          />
          <RechargeCard
            mode="Recharge"
            service1="DTH"
            service2="Connection"
            line={1}
            src="/img/DTH.png"
          />
          <RechargeCard
            mode="Book"
            line={1}
            service1="Gas"
            service2="Cylinder"
            src="/img/Cylinder.png"
          />
          <RechargeCard
            mode="Pay"
            line={1}
            service1="Broadband &"
            service2="Landline Bill"
            src="/img/wifi.png"
          />
          <RechargeCard
            mode="Pay"
            line={1}
            service1="Education"
            service2="Fee"
            src="/img/EduFee.png"
          />
          <RechargeCard
            line={1}
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
      {/* Book & Buy on Paytm.  */}
      <div className="w-full bg-[#0F4A8A] px-[130px] py-[60px] text-white">
        <div className="text-4xl font-bold mb-10">Book & Buy on Paytm.</div>
        <div className="flex justify-between">
          <RechargeCard
            src="/img/movie_tickets.png"
            mode=""
            service1="Movie"
            service2="Tickets"
          />
          <RechargeCard
            mode=""
            service1="Flight"
            service2="Tickets"
            src="/img/flight_tickets.png"
          />
          <RechargeCard
            mode=""
            service1="Bus"
            service2="Tickets"
            src="/img/bus_tickets.png"
          />
          <RechargeCard
            mode=""
            service1="Train"
            service2="Tickets"
            src="/img/train_tickets.avif"
          />
          <RechargeCard
            mode=""
            service1="International"
            service2="Flights"
            src="/img/internation_flights.png"
          />
          <RechargeCard
            mode=""
            service1="Buy"
            service2="Insurance"
            src="/img/Insurance.png"
          />
          <RechargeCard
            mode=""
            service1="Invest"
            service2="in Stocks"
            src="/img/stocks.webp"
          />
        </div>
      </div>
      {/* Paytm Payment Instruments Section */}
      <div className="w-full text-black bg-[#F5F7FA] px-[150px] py-[100px]">
        {/* heading  */}
        <div className="text-[50px] font-bold leading-tight pb-10">
          Paytm Payment Instruments
        </div>
        {/* grid section  */}
        <div className="grid grid-cols-2 gap-14">
          {/* Full-width block */}
          <div className="col-span-2 bg-white p-4 rounded-2xl flex py-14 justify-around">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-5">
                <img
                  src="/img/payment_inst_img0.webp"
                  alt="payment_inst_img0.webp"
                  height={80}
                  width={80}
                />
                <div className="text-lg font-semibold leading-6 w-40">
                  UPI Money Transfer
                </div>
              </div>
              <div className="font-bold leading-10 w-[400px] text-4xl">
                Pay anyone directly from your bank account.
              </div>
              <div className="w-[450px] text-lg">
                Pay anyone, everywhere. Make contactless & secure payments
                in-stores or online using Paytm UPI or Directly from your Bank
                Account. Plus, send & receive money from anyone.
              </div>
              <div className="bg-black rounded-3xl w-[240px] h-10 flex justify-between items-center px-6 font-semibold cursor-pointer">
                <div className="text-white">Download the App </div>
                <img src="/img/apple.svg" alt="apple" className="h-5 w-5" />
                <img
                  src="/img/playstore.svg"
                  alt="playstore"
                  className="h-5 w-5"
                />
              </div>
            </div>
            {/* flex second portion  */}
            <img src="/img/payment_inst_img1.webp" width={540} height={460} />
          </div>
          {/* Two half-width blocks */}
          {/* first section  */}
          <div className="bg-white flex flex-col gap-5 rounded-2xl pt-28 px-16">
            <img
              src="/img/hdfc_bank_img.png"
              alt="hdfc_bank_img.png"
              width={180}
              height={75}
            />
            <div className="text-[40px] font-bold leading-tight">
              Unlimited Cashback Every time
            </div>
            <div className="text-xl font-semibold">
              Paytm HDFC Bank Select Credit Card. A card with assured Cashback
              and incredible offers.
            </div>
            <div className="text-[13px] text-gray-500 w-[360px]">
              *Paytm Payments Bank does not provide any loan or credit card on
              the Paytm App.{" "}
              <span className="text-[#00BAF2] font-bold">Know more</span>
            </div>
            <img src="/img/payment_inst_img2.webp" alt="" />
          </div>
          {/* second section */}
          <div className="bg-white flex flex-col gap-5 rounded-2xl pt-28 px-16">
            <img
              src="/img/sbi.png"
              alt="hdfc_bank_img.png"
              width={180}
              height={75}
            />

            <div className="text-[40px] font-bold leading-tight">
              India’s Most Sincere Credit Card
            </div>
            <div className="text-xl font-semibold">
              Paytm SBI Card SELECT - With Intelligent Features & Great Rewards
              that Never Expire
            </div>
            <div className="text-[13px] text-gray-500 w-[360px]">
              *Paytm Payments Bank does not provide any loan or credit card on
              the Paytm App.{" "}
              <span className="text-[#00BAF2] font-bold">Know more</span>
            </div>
            <img src="/img/payment_inst_img3.webp" alt="" />
          </div>
        </div>
      </div>

      {/* Insurance made easy section. */}
      <div className="w-full px-[170px] py-[100px] text-white flex justify-between ">
        {/* w-full text-black bg-[#F5F7FA] px-[150px] py-[100px] */}
        {/* left side content  */}
        <div>
          <img
            src="/img/ins_brok.webp"
            alt="ins_brok.webp"
            width={183}
            height={54}
          />
          <div className="py-10 w-[450px]">
            <div className="text-black text-[40px] font-bold leading-tight">
              Insurance made easy.
            </div>
            <div className="text-black text-xl font-semibold py-4 leading-7">
              Buying insurance does not have to be tedious, time-consuming &
              confusing. Paytm Insurance removes the worry of getting insured by
              making it simple, convenient & easy-to-understand.
            </div>
          </div>
          <div className="bg-[#0F4A8A] hover:bg-[#00BAF2] rounded-full w-[165px] h-12 flex justify-between items-center px-6 font-semibold cursor-pointer text-lg">
            <div>Learn More</div>
            <img src="/img/forwardArrow.svg" className="h-5 w-5" />
          </div>
        </div>
        <div>
          <img
            src="/img/insu_mde_easy.webp"
            alt="sec3PaytmMobile.avif"
            width={433}
            height={400}
          />
        </div>
      </div>
    </>
  );
}
