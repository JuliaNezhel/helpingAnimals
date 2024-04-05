import cat from "./../../../assets/img/cat.jpg"

import s from "./Section.module.scss"
import { Button } from "../../button/Button"

export const Section = () => {
  return (
    <section className={s.container}>
      <div className="container">
        <div className={s.sectionBlock}>
          <div className={s.description}>
            <h1 className={s.title}>Мы любим животных и поддерживаем их</h1>
            <p className={s.descriptionText}>
              Один из проверенных способов это сделать — помочь благотворительному фонду
            </p>
            <Button className={s.button}>Кнопка добра</Button>
          </div>
          <div className={s.imgContainer}>
            <img src={cat} alt="милый котик" />
          </div>
        </div>
      </div>
    </section>
  )
}
