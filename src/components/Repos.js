import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { gitRepos } = React.useContext(GithubContext);

  const languages = gitRepos.reduce((total, item) => {
    const { language, starsgazers_count } = item;
    if (!language) return total;
    // console.log(language);
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: starsgazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + starsgazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  console.log(languages);

  //most stars per language
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  //stars.forks
  let { stars, forks} = gitRepos.reduce(
    (total, item) => {
      const {stargazers_count, name, forks } = item;
      console.log(item);
      total.stars[name] = { label: name, value: stargazers_count};
      total.forks[name] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  //stars
  stars=Object.values(stars).slice(-5).reverse();
  //console.log(stars);

 // console.log(stars);

  const chartData = [
    {
      label: "HTML",
      value: "290",
    },
    {
      label: "CSS",
      value: "260",
    },
    {
      label: "Js",
      value: "180",
    },
    {
      label: "Angular",
      value: "140",
    },
    {
      label: "React",
      value: "115",
    },
    {
      label: "Java",
      value: "100",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        <ExampleChart data={chartData} ctype={"pie3d"} />
        <Doughnut2D data={mostUsed} />
        <Column3D data={stars} />
        <Bar3D data={mostUsed} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
