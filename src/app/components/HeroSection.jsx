"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const phoneNumber = "+905312928562"; // Değiştirin: Telefon numarası uluslararası formatta olmalıdır.
  const message = "Merhaba bilgi almak istiyorum."; // Değiştirin: Mesajınızı buraya yazın.

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Uzman Psikolog
            </span>
            <br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Nur Kahvecioğlu
            </span>
          </h1>
          <p className="text-[#000] text-base sm:text-lg mb-6 lg:text-xl max-w-[700px]">
            Çocuk Ergen ve Yetişkin Psikolojik Danışmanlık Merkezi
          </p>
          <p className="text-[#000] text-base sm:text-lg mb-6 lg:text-xl max-w-[700px]">
           📍Tahılpazarı Mahallesi 474. Sokak No 2 Kat 5 Daire 10 Muratpaşa/Antalya
          </p>
          <div>
            <Link
              href={whatsappLink}
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 hover:bg-slate-200 text-white bg-black"
            >
              Whatsapp İletişim
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-[10vh] lg:mt-4"
        >
          <div className="rounded-full bg-[#AEAEAE] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/merve.jpeg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
