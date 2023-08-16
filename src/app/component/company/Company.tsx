"use client";
import { useQuery } from "react-query";
import "./Company.scss";
import React, { useState } from "react";
import ApiCompanies from "@/app/api/ApiCompanies";
import CompanyItem from "./CompanyItem/CompanyItem";
import { Button } from "antd";
import CreateCompany from "@/app/modal/CreateCompany/CreateCompany";

function Company() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery("companies", ApiCompanies.getAllCompanies);

  return (
    <div className="flex flex-col align-middle justify-center mt-16 relative">
      <div className="w-[85%] m-auto">
        <div className="flex justify-between">
          <h1 className="company-title text-center text-[28px] font-medium  relative mb-16">
            LIST COMPANY
          </h1>
          <Button
            size="large"
            className=" border-solid border-slate-600 border-2 text-slate-600 text-[20px] opacity-70"
            onClick={() => setIsOpen(true)}
          >
            Create
          </Button>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
          {data?.map((item, i) => (
            <CompanyItem key={i} item={item} />
          ))}
        </div>
      </div>
      <CreateCompany
        isOpen={isOpen}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      />
    </div>
  );
}

export default Company;
