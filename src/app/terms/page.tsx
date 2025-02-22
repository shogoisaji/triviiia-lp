"use client";

import { useState } from "react";

const TermsOfUse = () => {
  const [language, setLanguage] = useState<"jp" | "en">("jp");

  const content = {
    jp: {
      title: "利用規約",
      intro:
        "本利用規約（以下「本規約」といいます。）には、本アプリの提供条件及び本アプリの利用に関する運営者とユーザーの皆様との間の権利義務関係が定められています。本アプリの利用に際しては、本規約の全文をお読みいただいた上で、本規約に同意いただく必要があります。",
      sections: [
        {
          title: "第1条（適用）",
          content:
            "本規約は、本アプリの提供条件及び本アプリの利用に関する運営者とユーザーとの間の権利義務関係を定めることを目的とし、ユーザーと運営者との間の本アプリの利用に関わる一切の関係に適用されます。",
        },
        {
          title: "第2条（禁止事項）",
          content:
            "ユーザーは、本アプリの利用にあたり、以下の行為をしてはなりません。",
          list: [
            "法令に違反する行為または犯罪行為に関連する行為",
            "運営者、本アプリの他のユーザー、またはその他の第三者に対する詐欺または脅迫行為",
            "公序良俗に反する行為",
            "運営者、本アプリの他のユーザー、またはその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為",
            "本アプリのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為",
            "本アプリの運営を妨害するおそれのある行為",
            "不正アクセスをし、またはこれを試みる行為",
            "他のユーザーに関する個人情報等を収集または蓄積する行為",
            "その他、運営者が不適切と判断する行為",
          ],
        },
        {
          title: "第3条（本アプリの提供の停止等）",
          content:
            "運営者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本アプリの全部または一部の提供を停止または中断することができるものとします。",
          list: [
            "本アプリにかかるコンピューターシステムの保守点検または更新を行う場合",
            "地震、落雷、火災、停電または天災などの不可抗力により、本アプリの提供が困難となった場合",
            "コンピューターまたは通信回線等が事故により停止した場合",
            "その他、運営者が本アプリの提供が困難と判断した場合",
          ],

          additionalContent:
            "運営者は、本アプリの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。",
        },
        {
          title: "第4条（広告の掲載）",
          content:
            "運営者は、本アプリに広告を掲載することができるものとします。広告の内容は、AdMobによって提供され、運営者はその内容について一切の責任を負いません。",
        },
        {
          title: "第5条（保証の否認及び免責事項）",
          content:
            "運営者は、本アプリに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。\n\n運営者は、本アプリに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。ただし、本アプリに関する運営者とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。",
        },
        {
          title: "第6条（サービス内容の変更等）",
          content:
            "運営者は、ユーザーに通知することなく、本アプリの内容を変更しまたは本アプリの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。",
        },
        {
          title: "第7条（利用規約の変更）",
          content:
            "運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本アプリの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。",
        },
        {
          title: "第8条（個人情報の取扱い）",
          content:
            "運営者は、本アプリの利用によって取得する個人情報については、運営者「プライバシーポリシー」に従い適切に取り扱うものとします。",
        },
        {
          title: "第9条（通知または連絡）",
          content:
            "運営者からユーザーへの通知または連絡は、以下のいずれかの方法によって行うものとします：",
          list: [
            "本アプリ内での告知",
            "本アプリのストア説明ページでの告知",
            "運営者の公式ウェブサイトでの告知",
          ],

          additionalContent:
            "ユーザーの皆様には、より良いサービス体験のため、上記の場所を適宜ご確認いただくようお願いいたします。重要な情報やアップデートをお見逃しなく、常に最新の状態でアプリをお楽しみいただけます。\n\nこれらの方法で通知または連絡を行った場合、通知または連絡の内容は、運営者が当該通知または連絡を行った時点で、全てのユーザーに到達したものとみなされます。\n\nユーザーから運営者への通知または連絡は、運営者が本アプリまたは公式ウェブサイトにて指定する方法（お問い合わせフォーム、サポート用メールアドレスなど）により行うものとします。",
        },
        {
          title: "第10条（権利義務の譲渡の禁止）",
          content:
            "ユーザーは、運営者の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。",
        },
        {
          title: "第11条（準拠法・裁判管轄）",
          content:
            "本規約の解釈にあたっては、日本法を準拠法とします。\n本アプリに関して紛争が生じた場合には、運営者の本店所在地を管轄する裁判所を専属的合意管轄とします。",
        },
        {
          title: "第12条（情報の正確性および免責事項）",
          content:
            "本アプリに掲載されるトリビアや雑学情報（以下「本情報」といいます。）は、運営者が独自に調査し提供するものです。本情報の正確性、完全性、有用性については可能な限り注意を払っておりますが、その内容について保証するものではありません。\n\nユーザーは、本情報を参考にする際、自らの判断と責任に基づいて利用するものとします。本情報に基づく行動によって生じた損害や不利益について、運営者は一切責任を負いません。\n\n本情報に誤りや不適切な内容が含まれている場合がございます。その場合、ユーザーは本アプリ内のお問い合わせフォームまたは運営者が指定する方法を通じてご報告いただけますようお願いいたします。\n\n運営者は、ユーザーからの報告を受けた場合、本情報の内容を確認し、必要に応じて修正または削除する権利を有します。ただし、報告に対する対応義務を負うものではありません。",
        },
      ],

      footer: "以上",
    },
    en: {
      title: "Terms of Use",
      intro:
        'These Terms of Use (hereinafter referred to as the "Terms") set forth the terms and conditions for the provision of this application and the rights and obligations between the operator and users regarding the use of this application. Before using this application, please read these Terms in full and agree to them.',
      sections: [
        {
          title: "Article 1 (Application)",
          content:
            "These Terms aim to define the rights and obligations between the operator and users regarding the terms and conditions for the provision of this application and its use, and apply to all relationships between users and the operator regarding the use of this application.",
        },
        {
          title: "Article 2 (Prohibited Actions)",
          content:
            "Users shall not engage in the following actions when using this application:",
          list: [
            "Actions that violate laws or are related to criminal activities",
            "Fraudulent or threatening actions against the operator, other users of this application, or any third parties",
            "Actions that are contrary to public order and morals",
            "Actions that infringe on the intellectual property rights, portrait rights, privacy rights, honor, or other rights or interests of the operator, other users of this application, or any third parties",
            "Actions that destroy or interfere with the functions of this application's servers or networks",
            "Actions that may obstruct the operation of this application",
            "Attempting or carrying out unauthorized access",
            "Collecting or accumulating personal information of other users",
            "Any other actions deemed inappropriate by the operator",
          ],
        },
        {
          title: "Article 3 (Suspension of Service)",
          content:
            "The operator may suspend or interrupt all or part of this application without prior notice to users if it determines that any of the following reasons apply:",
          list: [
            "When performing maintenance, inspection, or updates on the computer system related to this application",
            "When the provision of this application becomes difficult due to force majeure such as earthquakes, lightning, fire, power outages, or natural disasters",
            "When computers or communication lines are stopped due to an accident",
            "When the operator otherwise determines that it is difficult to provide this application",
          ],

          additionalContent:
            "The operator shall not be liable for any disadvantage or damage suffered by users or third parties due to the suspension or interruption of this application.",
        },
        {
          title: "Article 4 (Advertising)",
          content:
            "The operator may place advertisements in this application. The content of the advertisements is provided by AdMob, and the operator assumes no responsibility for their content.",
        },
        {
          title:
            "Article 5 (Disclaimer of Warranty and Limitation of Liability)",
          content:
            "The operator does not explicitly or implicitly guarantee that there are no defects in fact or in law (including defects related to safety, reliability, accuracy, completeness, validity, fitness for a particular purpose, security, errors, bugs, rights infringement, etc.) in this application.\n\nThe operator shall not be liable for any damages incurred by users arising from this application. However, if the contract between the operator and users regarding this application (including these Terms) constitutes a consumer contract as defined in the Consumer Contract Act, this disclaimer shall not apply.",
        },
        {
          title: "Article 6 (Changes to Service Content)",
          content:
            "The operator may change the content of this application or discontinue the provision of this application without notifying users, and shall not be liable for any damages incurred by users as a result.",
        },
        {
          title: "Article 7 (Changes to Terms of Use)",
          content:
            "The operator may change these Terms at any time without notifying users when it deems necessary. If a user starts using this application after the Terms have been changed, the user is deemed to have agreed to the changed Terms.",
        },
        {
          title: "Article 8 (Handling of Personal Information)",
          content:
            'The operator shall appropriately handle personal information obtained through the use of this application in accordance with the operator\'s "Privacy Policy".',
        },
        {
          title: "Article 9 (Notifications and Communications)",
          content:
            "Notifications or communications from the operator to users shall be made by any of the following methods:",
          list: [
            "Announcements within the application",
            "Announcements on the application's store description page",
            "Announcements on the operator's official website",
          ],

          additionalContent:
            "Users are requested to check the above locations as appropriate for a better service experience. This will ensure that you do not miss important information and updates, and can always enjoy the application in its most up-to-date state.\n\nWhen notifications or communications are made by these methods, the content of the notifications or communications shall be deemed to have reached all users at the time the operator made such notifications or communications.\n\nNotifications or communications from users to the operator shall be made by the method specified by the operator in this application or on the official website (such as inquiry forms, support email addresses, etc.).",
        },
        {
          title:
            "Article 10 (Prohibition of Transfer of Rights and Obligations)",
          content:
            "Users may not transfer or provide as collateral to third parties their position under the usage contract or their rights or obligations based on these Terms without the prior written consent of the operator.",
        },
        {
          title: "Article 11 (Governing Law and Jurisdiction)",
          content:
            "The interpretation of these Terms shall be governed by the laws of Japan.\nIn the event of a dispute regarding this application, the court having jurisdiction over the location of the operator's head office shall have exclusive agreed jurisdiction.",
        },
        {
          title: "Article 12 (Accuracy of Information and Disclaimer)",
          content:
            "The trivia and miscellaneous information (hereinafter referred to as 'the Information') posted on this application is provided by the operator based on its own research. While we pay as much attention as possible to the accuracy, completeness, and usefulness of the Information, we do not guarantee its content.\n\nUsers shall use the Information at their own discretion and responsibility. The operator shall not be liable for any damages or disadvantages caused by actions based on the Information.\n\nThe Information may contain errors or inappropriate content. In such cases, users are requested to report it through the inquiry form in this application or by the method specified by the operator.\n\nThe operator has the right to check the content of the Information upon receiving a report from a user and to correct or delete it as necessary. However, the operator is not obligated to respond to the report.",
        },
      ],

      footer: "End of Terms",
    },
  };

  const currentContent = content[language];

  return (
    <div className="bg-custom-dark text-gray-100">
      <div className="max-w-2xl mx-auto p-4 ">
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

        <h1 className="text-2xl font-bold mb-4">{currentContent.title}</h1>
        <p className="mb-4">{currentContent.intro}</p>

        {currentContent.sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mt-6 mb-2">{section.title}</h2>
            <p className="mb-4">{section.content}</p>
            {section.list && (
              <ul className="list-disc pl-6 mb-4">
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
            {section.additionalContent && (
              <p className="mb-4">{section.additionalContent}</p>
            )}
          </div>
        ))}

        <p className="mt-8">{currentContent.footer}</p>
      </div>
    </div>
  );
};

export default TermsOfUse;
