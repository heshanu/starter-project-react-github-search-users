import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { gitRepos } = React.useContext(GithubContext);

  let languages = gitRepos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    // console.log(language);
    if (!total[language]) {
      total[language] ={label:language,value:1};
    } else {
     total[language] = {...total[language],value:total[language].value+1};
    }
    return total;
  }, {});

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
        {/*<ExampleChart data={chartData} ctype={"pie3d"}/>*/}
        <Pie3D data={chartData} />
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
