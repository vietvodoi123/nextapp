"use client";
import ApiDepartment from "@/app/api/ApiDepartment";
import CreateDepartment from "@/app/modal/CreateDepartment/CreateDepartment";
import { IDataDepartment } from "@/types";
import { Button, Empty, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import DepartmentItem from "./departmentItem/DepartmentItem";
import "./Department.scss";

function Department({ idCompany }: { idCompany: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<IDataDepartment[]>([]);
  useEffect(() => {
    const data1 = ApiDepartment.getAllDepartment(idCompany);
    data1.then((d) => {
      return setData(d);
    });
  }, [setData]);

  return (
    <div className="w-[85%] mx-auto py-10">
      <div className="flex justify-between align-middle mb-14 relative title-department">
        <h1 className="text-[28px]">DANH SÁCH PHÒNG BAN</h1>
        <Button
          className="border-2 border-slate-600 text-slate-600 border-solid"
          size="large"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Create
        </Button>
      </div>
      <div className="">
        {data.length === 0 && (
          <div className=" p-10">
            <Empty />
          </div>
        )}
        {data.map((item) => (
          <DepartmentItem item={item} key={item.id} />
        ))}
      </div>
      {isOpen && (
        <CreateDepartment
          idCompany={idCompany}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}

export default Department;
