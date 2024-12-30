"use client";

import { useState } from "react";

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState<"jp" | "en">("jp");

  const content = {
    jp: {
      title: "プライバシーポリシー",
      intro:
        "このプライバシーポリシーは、Triviiia（以下、「本サービス」といいます。）が提供するサービスにおける、以下の通りプライバシーポリシー（以下「本ポリシー」と言います。）を定めます。",
      section1: {
        title: "1. 個人情報の収集について",
        content:
          "当社は、本サービスの提供にあたり、以下の個人情報を収集することがあります：",
        list: ["氏名", "メールアドレス", "利用履歴", "端末情報"],
      },
      section2: {
        title: "2. 個人情報の利用目的",
        content: "収集した個人情報は、以下の目的で利用します：",
        list: [
          "本サービスの提供・運営のため",
          "ユーザーからのお問い合わせに対応するため",
          "利用規約に違反する行為に対応するため",
          "サービスの改善のため",
          "広告の表示",
        ],
      },
      section3: {
        title: "3. 個人情報の第三者提供",
        content:
          "当社は、法令に基づく場合を除き、ユーザーの同意を得ることなく、個人情報を第三者に提供することはありません。",
      },
      section4: {
        title: "4. 個人情報の保護",
        content:
          "当社は、個人情報の漏洩、滅失、き損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。",
      },
      section5: {
        title: "5. 個人情報の利用について",
        content:
          "当社は、主に広告表示の目的でATT（App Tracking Transparency）を通じて個人情報を利用する場合があります。また、広告配信にはGoogle AdMobを利用します。ログイン機能等、その他の目的で個人情報を利用することはありません。",
      },
      section6: {
        title: "6. プライバシーポリシーの変更",
        content:
          "当社は、必要に応じて、このプライバシーポリシーの内容を変更することがあります。変更後のプライバシーポリシーは、当社が別途定める場合を除いて、本ウェブサイトに掲載したときから効力を生じるものとします。",
      },
      footer: {
        established: "制定日：2024年12月30日",
      },
    },
    en: {
      title: "Privacy Policy",
      intro:
        "This Privacy Policy describes how Triviiia (hereinafter referred to as 'the Service') collects, uses, and shares information about you when you use our service.",
      section1: {
        title: "1. Collection of Personal Information",
        content:
          "We may collect the following personal information in connection with the provision of this service:",
        list: ["Name", "Email address", "Usage history", "Device information"],
      },
      section2: {
        title: "2. Purpose of Using Personal Information",
        content:
          "The collected personal information will be used for the following purposes:",
        list: [
          "To provide and operate this service",
          "To respond to inquiries from users",
          "To respond to acts that violate the terms of use",
          "To improve the service",
          "Displaying advertisements",
        ],
      },
      section3: {
        title: "3. Provision of Personal Information to Third Parties",
        content:
          "We will not provide personal information to third parties without the user's consent, except as required by law.",
      },
      section4: {
        title: "4. Protection of Personal Information",
        content:
          "We will take necessary and appropriate measures to prevent leakage, loss, or damage of personal information and to ensure the safe management of personal information.",
      },
      section5: {
        title: "5. Use of Personal Information",
        content:
          "We may use personal information through ATT (App Tracking Transparency) mainly for the purpose of displaying advertisements. We also use Google AdMob for ad delivery. We do not use personal information for other purposes such as login functions.",
      },
      section6: {
        title: "6. Changes to the Privacy Policy",
        content:
          "We may change the contents of this Privacy Policy as necessary. Unless otherwise specified by us, the revised Privacy Policy shall take effect when it is posted on this website.",
      },
      footer: {
        established: "Established: December 30, 2024",
      },
    },
  };

  const currentContent = content[language];

  return (
    <div className="bg-custom-dark text-gray-100">
      <div className="max-w-2xl mx-auto p-6 ">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLanguage("jp")}
            className={`${
              language === "jp"
                ? "bg-emerald-500 text-white"
                : "bg-gray-300 text-gray-700"
            }  font-bold py-2 px-4 rounded mr-2`}
          >
            日本語
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`${
              language === "en"
                ? "bg-emerald-500 text-white"
                : "bg-gray-300 text-gray-700"
            }  font-bold py-2 px-4 rounded mr-2`}
          >
            English
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-4">{currentContent.title}</h1>
        <p className="mb-4">{currentContent.intro}</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">
          {currentContent.section1.title}
        </h2>
        <p className="mb-4">{currentContent.section1.content}</p>
        <ul className="list-disc list-inside mb-4">
          {currentContent.section1.list &&
            currentContent.section1.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-2">
          {currentContent.section2.title}
        </h2>
        <p className="mb-4">{currentContent.section2.content}</p>
        <ul className="list-disc list-inside mb-4">
          {currentContent.section2.list &&
            currentContent.section2.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-2">
          {currentContent.section3.title}
        </h2>
        <p className="mb-4">{currentContent.section3.content}</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">
          {currentContent.section4.title}
        </h2>
        <p className="mb-4">{currentContent.section4.content}</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">
          {currentContent.section5.title}
        </h2>
        <p className="mb-4">{currentContent.section5.content}</p>

        {currentContent.section6 && (
          <>
            <h2 className="text-2xl font-bold mt-8 mb-2">
              {currentContent.section6.title}
            </h2>
            <p className="mb-4">{currentContent.section6.content}</p>
          </>
        )}

        <p className="mt-8">{currentContent.footer.established}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
