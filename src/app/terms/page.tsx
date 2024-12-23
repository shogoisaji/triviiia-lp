export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-8">利用規約</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. はじめに</h2>
              <p className="text-gray-600">
                この利用規約（以下、「本規約」といいます。）は、Triviiia（以下、「当社」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. 利用登録</h2>
              <p className="text-gray-600">
                登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. 禁止事項</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>
                  当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
                </li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>他のユーザーに成りすます行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                4. 本サービスの提供の停止等
              </h2>
              <p className="text-gray-600">
                当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. 免責事項</h2>
              <p className="text-gray-600">
                当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
