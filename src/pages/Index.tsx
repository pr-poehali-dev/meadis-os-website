import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-aero-light via-blue-50 to-green-50">
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/60 border-b border-white/40 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-aero-blue to-aero-green flex items-center justify-center shadow-lg">
              <Icon name="Monitor" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-aero-blue to-aero-green bg-clip-text text-transparent">
              Meadis OS
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Возможности
            </a>
            <a href="#download" className="text-foreground/80 hover:text-foreground transition-colors">
              Скачать
            </a>
            <a href="#community" className="text-foreground/80 hover:text-foreground transition-colors">
              Сообщество
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-aero-blue via-aero-green to-aero-yellow shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent"></div>
                <Icon name="Monitor" size={64} className="text-white relative z-10" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-8 bg-black/10 blur-xl rounded-full"></div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-aero-blue via-aero-green to-aero-yellow bg-clip-text text-transparent">
            Meadis OS
          </h1>
          <p className="text-2xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            Современная операционная система для повседневного использования
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-aero-blue to-aero-green text-white shadow-lg hover:shadow-xl transition-all relative overflow-hidden group px-8 py-6 text-lg rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
              <span className="relative z-10 flex items-center gap-2">
                <Icon name="Download" size={20} />
                Скачать сейчас
              </span>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-aero-blue to-aero-green bg-clip-text text-transparent">
            Ключевые возможности
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="backdrop-blur-md bg-white/70 border-white/60 shadow-xl p-8 rounded-3xl hover:scale-105 transition-transform relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-aero-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aero-blue to-blue-400 flex items-center justify-center mb-4 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent rounded-2xl"></div>
                  <Icon name="Zap" size={32} className="text-white relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Молниеносная скорость</h3>
                <p className="text-foreground/70">
                  Система очень быстрая из-за своего минимального веса и оптимизации
                </p>
              </div>
            </Card>

            <Card className="backdrop-blur-md bg-white/70 border-white/60 shadow-xl p-8 rounded-3xl hover:scale-105 transition-transform relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-aero-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aero-green to-green-400 flex items-center justify-center mb-4 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent rounded-2xl"></div>
                  <Icon name="Shield" size={32} className="text-white relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Надёжная защита</h3>
                <p className="text-foreground/70">
                  В системе встроен антивирус для безопасности устройства!
                </p>
              </div>
            </Card>

            <Card className="backdrop-blur-md bg-white/70 border-white/60 shadow-xl p-8 rounded-3xl hover:scale-105 transition-transform relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-aero-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aero-yellow to-yellow-400 flex items-center justify-center mb-4 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent rounded-2xl"></div>
                  <Icon name="Palette" size={32} className="text-white relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Современный дизайн</h3>
                <p className="text-foreground/70">
                  Красивый и интуитивный интерфейс для комфортной работы каждый день
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-6 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-aero-blue to-aero-green bg-clip-text text-transparent">
            Скачать Meadis OS
          </h2>
          
          <Card className="backdrop-blur-md bg-white/80 border-white/60 shadow-2xl p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-aero-blue/20 to-aero-green/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-aero-blue via-aero-green to-aero-yellow shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent"></div>
                  <Icon name="Monitor" size={48} className="text-white relative z-10" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">Meadis OS v1.0</h3>
                <p className="text-foreground/70 mb-4">Последняя стабильная версия для Windows, Mac и Linux</p>
                <div className="flex gap-3">
                  <Button className="bg-gradient-to-r from-aero-blue to-aero-green text-white shadow-lg hover:shadow-xl transition-all relative overflow-hidden group rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon name="Download" size={18} />
                      Загрузить систему
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="community" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-aero-blue to-aero-green bg-clip-text text-transparent">
            Присоединяйтесь к сообществу
          </h2>
          <p className="text-xl text-foreground/70 mb-10">
            Общайтесь с другими пользователями и разработчиками Meadis OS
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg"
              className="backdrop-blur-md bg-white/70 border-white/60 shadow-lg hover:shadow-xl transition-all text-foreground rounded-2xl px-6"
              variant="outline"
              asChild
            >
              <a href="https://t.me/MeadisOS" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} className="mr-2" />
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 backdrop-blur-md bg-white/60 border-t border-white/40">
        <div className="max-w-6xl mx-auto text-center text-foreground/70">
          <p>© 2025 Meadis OS. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;