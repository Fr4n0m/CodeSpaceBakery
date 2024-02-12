import Header from "@/components/HeaderComponent/HeaderComponent";
import LoadComponent from "@/components/LoadComponent/LoadComponent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import "@/styles/globals.css";
import BackButton from "@/components/ButtonComponents/BackButtonComponent/BackButtonComponent";
import DonutDetails from "@/components/DonutDetailsComponents/DonutDetailsComponent";
import DonutList from "@/components/DonutsListComponents/DonutListComponent";
import { Helmet } from "react-helmet";

const DonutDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("ID:", id);

  const [donut, setDonut] = useState(null);

  useEffect(() => {
    const fetchDonutDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/donuts/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener los detalles del donut");
        }
        const data = await response.json();
        setDonut(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchDonutDetails();
    }
  }, [id]);

  if (!donut) {
    return <LoadComponent />;
  }

  console.log(donut.donut);

  return (
    <>
      <Helmet>
        <title>CodeSpace - Bakery</title>
        <meta content="CodeSpace - Bakery" />
        <link rel="icon" href="/assets/icons/donut-icon.png"></link>
      </Helmet>

      <Header />

      <BackButton />

      <DonutDetails donut={donut.donut} />

      <DonutList />
    </>
  );
};

export default DonutDetailPage;
