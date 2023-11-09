import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import IdCardIcon from "@/assets/IdCardIcon";
import { ElectricityDetailsInterface } from "@/constants/interface";
import { payPercentage } from "@/constants/utils";
import { useAppSelector } from "@/redux/app/hooks";
import {
  useBuyDataMutation,
  usePriceListMutation,
} from "@/redux/services/electricity.service";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";

const UtilityPaymentInternet = ({
  internetDetails,
}: {
  internetDetails: ElectricityDetailsInterface;
}) => {
  const [priceList, priceListStatus] = usePriceListMutation();
  const [dataList, setDataList] = useState([]);
  const [bundleCode, setBundleCode] = useState("");
  const toast = useToast();
  const router = useRouter();
  const [bundleCodeError, setBundleCodeError] = useState("");
  const [buyData, buyDataStatus] = useBuyDataMutation();
  const userName = useAppSelector(
    (state) => state?.app?.user?.userProfile?.name
  );
  console.log("bundleCode", bundleCode);

  useEffect(() => {
    const getPriceLists = async () => {
      console.log("MerchantFK", internetDetails?.merchantId);
      const res: any = await priceList({
        MerchantFK: internetDetails?.merchantId,
      });
      console.log("dataList: ", res);
      if (res?.data?.data?.respCode === "00") {
        setDataList(res?.data?.data?.BundleList);
      } else {
        toast({
          title: "Error",
          description:
            res?.error?.data?.message ||
            "Couldn't fetch data data list. Something went wrong",
          status: "error",
          duration: 8000,
          isClosable: true,
          position: "top-right",
        });
      }
    };
    getPriceLists();
  }, []);

  return (
    <Box px={{ lg: "2rem" }} mt={{ base: "4rem", lg: "1.9rem" }}>
      <Formik
        initialValues={{
          phone: "",
        }}
        enableReinitialize
        validationSchema={Yup.object({
          phone: Yup.string()
            .required("Phone Number is Required")
            //.min(13, 'Must be exactly 13 digits (as it is on the placeholder)')
            .max(
              13,
              "Must not be more than 13 digits (as it is on the placeholder)"
            ),
        })}
        onSubmit={async ({ phone }) => {
          if (!Number(phone)) {
            toast({
              title: "Invalid phone number",
              description: "Please enter a valid phone number",
              status: "error",
              duration: 8000,
              isClosable: true,
              position: "top-right",
            });
            return;
          }
          /* if (!phone.startsWith("234")) {
            toast({
              title: "Invalid phone number",
              description:
                "Phone number must be in the format of the placeholder",
              status: "error",
              duration: 8000,
              isClosable: true,
              position: "top-right",
            });
            return;
          }*/
          if (!bundleCode) {
            setBundleCodeError("Please select a Data Bundle");
            return;
          }
          if (internetDetails?.merchantId && bundleCode?.split("$")[2]) {
            const res: any = await buyData({
              customerId: phone,
              customerName: userName,
              bundleType: bundleCode?.split("$")[1],
              bundleTypeCode: bundleCode?.split("$")[0],
              CustomerPhone: phone,
              amount: bundleCode?.split("$")[2],
              discount: (
                Number(bundleCode?.split("$")[2]) * payPercentage
              ).toString(),
              MerchantFK: Number(internetDetails?.merchantId),
            });
            console.log("buyResp", res);
            if (res?.data?.data) {
              toast({
                title: "Purchase successful",
                description: "Your purchase has been successful",
                status: "success",
                duration: 8000,
                isClosable: true,
                position: "top-right",
              });
              router.push("/dashboard");
            } else {
              toast({
                title: "Purchase failed",
                description:
                  res?.error?.data?.message ||
                  res?.data?.message ||
                  "Couldn't make the purchase. Something went wrong",
                status: "error",
                duration: 8000,
                isClosable: true,
                position: "top-right",
              });
            }
          }
        }}
      >
        {(props) => (
          <Form>
            <Field name={"phone"}>
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors["phone"] && form.touched["phone"]}
                >
                  <InputGroup
                    border={"none"}
                    outline="none"
                    borderRadius={"6px"}
                    background={"#F5F5F5"}
                  >
                    <Input
                      width={{ base: "100%", lg: "480px", mlg: "570px" }}
                      height="50px"
                      border={"none"}
                      outline="none"
                      placeholder="Phone Number (08023462567)"
                      fontFamily="Poppins"
                      color="#717171"
                      focusBorderColor="white"
                      fontSize={{ base: "12px", lg: "16px" }}
                      {...field}
                    />
                    <InputRightElement pointerEvents="none" h="100%">
                      <Icon as={IdCardIcon} />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors["phone"]}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Select
              width={{ base: "100%", lg: "480px", mlg: "570px" }}
              height="50px"
              border={"none"}
              outline="none"
              placeholder="Select Data bundle"
              fontFamily="Poppins"
              color="#717171"
              focusBorderColor="white"
              borderRadius={"6px"}
              background={"#F5F5F5"}
              fontSize={{ base: "12px", lg: "16px" }}
              mt={{ base: "1.6rem", lg: "2rem" }}
              value={bundleCode}
              onChange={(e) => {
                setBundleCode(e.target.value);
                setBundleCodeError("");
              }}
            >
              {dataList?.map(
                (each: {
                  BundleDescription: string;
                  BundleTypeCode: string;
                  BundleType: string;
                  BundlePrice: string;
                }) => (
                  <option
                    key={each?.BundleDescription}
                    value={
                      each?.BundleTypeCode +
                      "$" +
                      each?.BundleType +
                      "$" +
                      each?.BundlePrice
                    }
                  >
                    {each?.BundleDescription}
                  </option>
                )
              )}
            </Select>
            <Text
              color="red"
              fontSize={{ base: "12px", lg: "15px" }}
              fontFamily={"Poppins"}
            >
              {bundleCodeError}
            </Text>
            <Input
              width={{ base: "100%", lg: "480px", mlg: "570px" }}
              height="50px"
              border={"none"}
              outline="none"
              placeholder="Amount"
              fontFamily="Poppins"
              color="#717171"
              focusBorderColor="white"
              borderRadius={"6px"}
              background={"#F5F5F5"}
              fontSize={{ base: "12px", lg: "16px" }}
              mt={{ base: "1.6rem", lg: "2rem" }}
              value={bundleCode?.split("$")[2]}
              readOnly={true}
            />
            <Flex
              justifyContent={{ base: "center", lg: "flex-end" }}
              mt={{ base: "4.6rem", lg: "6rem" }}
            >
              <Button
                height={{ base: "47px", lg: "33px" }}
                background="#417657"
                box-shadow="0px 24.2056px 48.4112px 7.26168px rgba(0, 0, 0, 0.1)"
                borderRadius="5px"
                px="1.5rem"
                fontFamily="Raleway"
                fontWeight="600"
                color="#FFFFFF"
                w={{ base: "100%", lg: "auto" }}
                type="submit"
              >
                Pay{" "}
                {bundleCode?.split("$")[2]
                  ? "₦" +
                    (
                      Number(bundleCode?.split("$")[2]) * payPercentage
                    )?.toLocaleString()
                  : ""}
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UtilityPaymentInternet;
