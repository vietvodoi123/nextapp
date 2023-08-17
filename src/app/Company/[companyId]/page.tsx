"use client";
import ApiCompanies from "@/app/api/ApiCompanies";
import Navbar from "../../component/navbar/Navbar";
import CompanyNav from "@/app/component/company/CompanyDetail/CompanyNav/CompanyNav";
import Positions from "@/app/component/company/CompanyDetail/Positions/Positions";
import Department from "@/app/component/company/CompanyDetail/department/Department";
import CompanyHeaderDetail from "@/app/component/company/CompanyDetail/header/CompanyHeaderDetail";
import { IRootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

export function generateStaticParams() {
  const { data } = useQuery("companies", ApiCompanies.getAllCompanies);

  return data?.map((x) => x.id);
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const { data } = useQuery(["companies", params], () =>
    ApiCompanies.getCompanyById(params.postId)
  );
  if (!data) {
    return {
      title: "Company Not Found",
    };
  }
  return {
    title: data.displayName,
  };
}

function CompanyDetailPage({ params }: { params: { companyId: string } }) {
  const [company, setCompany] = useState<any>({});
  useEffect(() => {
    const data = ApiCompanies.getCompanyById(params.companyId);
    data.then((d) => {
      setCompany(d);
    });
  }, []);
  const nav = useSelector((state: IRootState) => state.compayNav.nav);

  return (
    <div>
      <Navbar />
      <CompanyHeaderDetail company={company} />
      <CompanyNav />
      {nav === "phongban" && <Department idCompany={params.companyId} />}
      {nav === "chucvu" && <Positions idCompany={params.companyId} />}
    </div>
  );
}

export default CompanyDetailPage;
