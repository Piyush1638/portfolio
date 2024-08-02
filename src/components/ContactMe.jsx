"use client";
import { useState } from "react";
import { db } from "@/firebaseConfig";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);

    const uniqueId = email.replace(/[@.]/g, "");
    const today = new Date().toLocaleString();

    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      receivedAt: today,
      markedAsRead: false,
      lastMessageRecieved:today,
    };

    try {
      const userDocRef = doc(db, "messages", uniqueId);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const messagesArray = userData.messages || [];
        const updatedMessages = [
          ...messagesArray,
          {
            subject: formData.subject,
            message: formData.message,
            receivedAt: formData.receivedAt,
          },
        ];

        await updateDoc(userDocRef, {
          messages: updatedMessages,
          markedAsRead: false,
          lastMessageRecieved: today,
        });
      } else {
        await setDoc(userDocRef, {
          name: formData.name,
          email: formData.email,
          messages: [
            {
              subject: formData.subject,
              message: formData.message,
              receivedAt: formData.receivedAt,
            },
          ],
          markedAsRead: formData.markedAsRead,
          lastMessageRecieved: today,
        });
      }

      console.log("Message stored successfully");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      setSending(false);
      setMessageSent(true);
      setStatus("Message Sent Successfully!");

      setTimeout(() => {
        setMessageSent(false);
      }, 5000);
    } catch (error) {
      setSending(false);
      setMessageSent(true);

      setTimeout(() => {
        setMessageSent(false);
      }, 5000);
      setStatus("Something went wrong!");
    }
  };

  const Circle = () => (
    <div className="flex justify-center items-center py-2">
      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-textPink" />
    </div>
  );

  return (
    <section
      id="contact"
      className="relative  min-h-[600px] bg-transparent w-full my-10 border-b-2 border-slate-400 pb-10"
    >
      <span className="w-[50px] sm:block hidden  h-[50px] bg-lightPurple rounded-full z-10 absolute blur-sm top-20 right-20 animate-pulse" />
      <span className="w-[100px] sm:block hidden  h-[100px] bg-lightPurple rounded-full z-10 absolute blur-sm bottom-10 md:left-1 lg:left-20 left-0  animate-pulse" />
      <span className="w-[20px] sm:block hidden  h-[20px] bg-lightPurple rounded-full  absolute blur-sm top-0 left-40 animate-pulse" />
      <h1 className="sm:text-4xl text-center text-3xl font-semibold font-montserrat text-white my-10">
        Contact{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-textPurple to-textPink">
          Me
        </span>
      </h1>
      <p className="text-center font-poppins font-medium z-10 text-slate-200">
        Contact me: I build software and relationships. Both are bug-free and
        feature-rich!
      </p>

      <div className="flex items-center justify-center my-10 min-h-[400px]">
        <form
          onSubmit={submit}
          className="md:w-4/5 lg:w-3/5 w-full bg-primary md:p-10 p-5 rounded-lg"
        >
          <div className="flex flex-col gap-3 min-h-3/5">
            <input
              type="text"
              placeholder="Name"
              spellCheck="false"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              className="w-full text-slate-300 p-2 bg-secondary  focus:outline-textPurple rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              spellCheck="false"
              name="email"
              value={email}
              required
              // onChange={onChange}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              className="w-full text-slate-300 p-2 bg-secondary  focus:outline-textPurple rounded-md"
            />
            <input
              type="text"
              placeholder="subject"
              spellCheck="false"
              name="subject"
              required
              value={subject}
              // onChange={onChange}
              onChange={(e) => setSubject(e.target.value)}
              autoComplete="off"
              className="w-full text-slate-300  p-2 bg-secondary focus:outline-textPurple rounded-md"
            />
            <textarea
              type="text"
              placeholder="Message"
              spellCheck="false"
              name="message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
              className="w-full text-slate-300 h-4/5 p-2 bg-secondary focus:outline-textPurple rounded-md"
            />
          </div>
          <div className="text-end">
            <button
              type="submit"
              className="bg-textPurple px-4 py-3 min-w-[100px] my-3 font-montserrat rounded-lg text-white"
            >
              {sending ? <Circle /> : "Send 🚀"}
            </button>
          </div>
          {messageSent && (
            <p
              className={`${
                status === "Message Sent Successfully!"
                  ? "text-green-500"
                  : "text-red-500"
              } font-semibold font-poppins text-sm text-center`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
      <p className="text-white font-bold font-poppins text-center flex items-center justify-center gap-2">
        <Image 
          src="/gmail.png"
          height={20}
          width={20}
          priority
          alt="Gmail"
          quality={100}
        />
        piyushkumarsingh665@gmail.com
      </p>
    </section>
  );
};

export default ContactMe;
