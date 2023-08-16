"use client";
import React, { Suspense, useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import { useQuery } from "react-query";
import ApiUser from "../api/ApiUser";
import { MdAddAPhoto } from "react-icons/md";
import { Button, Modal, Skeleton } from "antd";
import UpdateUser from "../modal/UpdateUser/UpdateUser";
import UpdateAvatar from "../modal/UpdateAvatar/UpdateAvatar";

function UserPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAvatar, setIsOpenAvatar] = useState(false);
  const { data } = useQuery("me", ApiUser.getMe);

  return (
    <>
      <Navbar />
      <Suspense fallback={<Skeleton />}>
        <div className="flex flex-col justify-center items-center mt-16 relative">
          <div className=" relative">
            <img
              src={data?.avatar ? data.avatar : "/img/avatar/avatar.jpg"}
              width={200}
              height={200}
              className="rounded-full"
            />
            <div
              className=" absolute bottom-0 right-0 rounded-full bg-slate-300   flex justify-center align-middle p-4 hover:cursor-pointer"
              onClick={() => setIsOpenAvatar(true)}
            >
              <MdAddAPhoto className=" w-[30px] h-[30px]" />
            </div>
            <Button
              size="large"
              className=" absolute top-0 right-[-350px] border-solid border-2 border-slate-600 text-slate-600 text-[20px]"
              onClick={() => setIsOpen(true)}
            >
              Edit
            </Button>
          </div>
          {data?.fullName && (
            <span className="text-[20px] font-medium mt-2">
              {data?.fullName}
            </span>
          )}
          <span className="text-[20px] font-medium mt-2"> {data?.email}</span>
          {data?.profile?.phone && (
            <span className="text-[20px] font-medium mt-2">
              {data.profile.phone}
            </span>
          )}
        </div>
        {isOpen && <UpdateUser isOpen={isOpen} setIsOpen={setIsOpen} />}
        {isOpenAvatar && (
          <UpdateAvatar isOpen={isOpenAvatar} setIsOpen={setIsOpenAvatar} />
        )}
      </Suspense>
    </>
  );
}

export default UserPage;
