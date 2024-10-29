import styles from "./styles.module.css";

const stub = {
  name: "Иван Стрилец",
  birthday: "06.12.1986",
  skills: [
    {
      title: "хард скилы",
      text: "описание, вступление, краткое обьсяниение",
      labels: [
        "HTML",
        "CSS",
        "JS",
        "TS",
        "NODE",
        "REACT",
        "NEXT",
        "VUE",
        "NUXT",
        "MPA",
        "SPA",
        "SSR",
        "SSG",
      ],
    },
    {
      title: "сопутсвующие технологии",
      text: "описание, вступление, краткое обьсяниение",
      labels: ["VITE", "WEBPACK", "STORYBOOK", "JEST", "ESLINT", "PRETTIER"],
    },
    {
      title: "методолгии и подходы",
      text: "описание, вступление, краткое обьсяниение",
      labels: [
        "FSD",
        "BEM",
        "MOBILE FIRST",
        "CONTRACT FIRST",
        "REST",
        "SOLID",
        "DRY",
        "KISS",
        "YAGNI",
      ],
    },
    {
      title: "софт скилы",
      text: "описание, вступление, краткое обьсяниение",
      labels: ["WORK-LIFE BALANCE", "Cкил", "Cкил"],
    },
  ],
  activity: {
    title: "общественная деятельность",
    text: "описание, вступление, краткое обьсяниение",
    labels: ["VK EDUCATION", "DOKA.GUIDE", "HTML ACADEMY", "МЕНТОРСТВО"],
  },
  work: {
    title: "работа",
    places: [
      {
        title: "VK",
        text: "описание, вступление, краткое обьсяниение",
      },
      { title: "TIMEWEB", text: "описание, вступление, краткое обьсяниение" },
      { title: "TRAVELASK", text: "описание, вступление, краткое обьсяниение" },
      { title: "FREELANCE", text: "описание, вступление, краткое обьсяниение" },
      { title: "OUTSOURCE", text: "описание, вступление, краткое обьсяниение" },
    ],
  },
};

export const About = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        {/* <aside>
          <h1>{stub.name}</h1>
          <p>возвраст: 37 лет</p>
          <ul>
            <li>email</li>
            <li>tg</li>
            <li>vk</li>
            <li>habr</li>
            <li>linkedin</li>
          </ul>
        </aside> */}

        <main>
          {stub.skills.map((skillsData, skillsDataIndex) => (
            <section key={skillsDataIndex}>
              <h2>{skillsData.title} </h2>
              <ul className={styles.list}>
                {skillsData.labels.map((label, labelIndex) => (
                  <li key={labelIndex} className={styles.label}>
                    {label}
                  </li>
                ))}
              </ul>
              <p>{skillsData.text}</p>
              <br />
            </section>
          ))}

          <section>
            <h2>{stub.activity.title}</h2>
            <p>{stub.activity.text}</p>
            <ul className={styles.list}>
              {stub.activity.labels.map((activityLabel, activityLabelIndex) => (
                <li key={activityLabelIndex} className={styles.label}>
                  {activityLabel}
                </li>
              ))}
            </ul>
          </section>
          <br />

          <section>
            <h2>{stub.work.title}</h2>
            <ul>
              {stub.work.places.map((place, placeIndex) => (
                <li key={placeIndex}>
                  <h3>{place.title}</h3>
                  <p>{place.text}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};
