import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>お問い合わせ</CardTitle>
              <CardDescription>
                ご質問やご要望がございましたら、以下のフォームよりお気軽にお問い合わせください。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">お名前</Label>
                  <Input id="name" placeholder="山田 太郎" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">お問い合わせ種類</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">
                        一般的なお問い合わせ
                      </SelectItem>
                      <SelectItem value="bug">不具合の報告</SelectItem>
                      <SelectItem value="feature">機能の要望</SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">お問い合わせ内容</Label>
                  <Textarea
                    id="message"
                    placeholder="お問い合わせ内容をご記入ください"
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  送信する
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
