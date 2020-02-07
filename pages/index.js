import PageWrapper from "../components/PageWrapper";

const Index = () => (
  <>
    <style jsx global>
      {`
        html,
        body {
          margin: 0;
          padding: 0;
          border: 0;
          background-color: #000;
        }
      `}
    </style>

    <style jsx>
      {`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
      `}
    </style>
    <div>
      <PageWrapper />
    </div>
  </>
);

export default Index;
