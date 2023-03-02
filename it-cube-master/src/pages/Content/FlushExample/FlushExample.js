import Accordion from 'react-bootstrap/Accordion';

import './FlushExample.css'

function FlushExample() {
  return (
    <>
      <div className='all-according'>
        <h1>Как подать заявку на обучение?</h1>
        <div>
          <h3>1. ПРОВЕРЬТЕ СВОЙ ЛИЧНЫЙ КАБИНЕТ В СИСТЕМЕ НАВИГАТОВ ДЕТИ.66</h3>
          <div className='accord'>
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>ПОЛНОЕ ОПИСАНИЕ</Accordion.Header>
                <Accordion.Body>
                  Есть 2 варианта входа: по логину-паролю и через Госуслуги. Вход по логину-паролю – нажимаете на кнопку «Войти» справа от «Регистрации», вводите ящик-пароль, входите в ЛК. Вход через Госуслуги – нажимаете на соответствующую кнопку, разрешаете сайту доступ к данным с Госуслуг, вводите проверочный код из СМС, входите. Учтите, что у вас должна быть подтвержденная запись на Госуслугах, если хотите через них войти.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div>
          <h3>2. ПОДАЙТЕ ЗАЯВЛЕНИЕ В ОФИСЕ, ИЛИ ЧЕРЕЗ НАВИГАТОР</h3>
          <div className='accord'>
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>ПОЛНОЕ ОПИСАНИЕ</Accordion.Header>
                <Accordion.Body>
                  В офисе IT-CUBA вам предоставят заявление для приёма ващего ребёнка в IT-CUBE , или же отправьте его нам через навигатор 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

        </div>
        <div>
          <h3>3. ПОЛУЧИТЕ ПОДТВЕРЖДЕНИЕ ЗАЯВКИ</h3>
          <div className='accord'>
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>ПОЛНОЕ ОПИСАНИЕ</Accordion.Header>
                <Accordion.Body>
                  После подачи документов идёт их обработка, после ваш ребёнок может успешно приходить на занятия  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div>
          <h3>4. ПРЕДОСТАВЬТЕ ПАКЕТ ДОКУМЕНТОВ ДЛЯ ЗАЧИСЛЕНИЯ</h3>
          <div className='accord'>
            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>ПОЛНОЕ ОПИСАНИЕ</Accordion.Header>
                <Accordion.Body>
                Для зачисления в «IT-КУБ» необходимы следующие документы: Сертификат ПФДО (персонифицированного дополнительного образования) Копия СНИЛС ребенка; Копии документов, удостоверяющих личность ребенка (свидетельство о рождении ребенка, при достижении 14 лет — копия паспорта)
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>

  );
}

export default FlushExample;