// type Props = {};
import { Button, Form, Input, InputNumber, Radio, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { hiddenSpinner, showSpinner } from "../util/util";
// import Button from "../components/Button";
import { validateProduct } from "../Validations/product";
import { https } from "../services/config";
import TextArea from "antd/es/input/TextArea";

const AddProduct = () => {
  // const navigate = useNavigate();
  // const [categoriesList, setCategoriesList] = useState<Category[]>([]);

  // const [formData, setFormData] = useState<FormProductData>({
  //   name: "",
  //   desc: "",
  //   images: "",
  //   price: 0,
  //   gender: "",
  //   id_category: "",
  // });

  // const [errors, setErrors] = useState<ValidProduct>({});

  // const fetchCategoryes = async () => {
  //   const categories = await https.get("/categories");
  //   setCategoriesList(categories.data.data);
  // };
  // useEffect(() => {
  //   fetchCategoryes();
  // }, []);

  // const handleChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  //   >
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const validationErrors = validateProduct(formData);
  //   if (Object.keys(validationErrors).length !== 0) {
  //     setErrors(validationErrors);
  //   } else {
  //     showSpinner();
  //     try {
  //       const newData = {
  //         name: formData.name,
  //         desc: formData.desc,
  //         images: [formData.images],
  //         price: formData.price,
  //         gender: formData.gender,
  //         id_category: formData.id_category,
  //       };

  //       const res = await https.post("/products", newData);
  //       if (res) {
  //         toast.success("Thêm sản phẩm thành công!", {
  //           position: toast.POSITION.TOP_CENTER,
  //         });
  //         navigate("/admin/products");
  //         hiddenSpinner();
  //       }
  //     } catch (error) {
  //       hiddenSpinner();
  //       toast.error(error.response.data.message, {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //       console.log(error);
  //     }
  //   }
  // };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    name?: string;
    password?: string;
    remember?: string;
  };

  return (
    <div className="max-w-lg w-full mx-auto px-5 pb-5">
      <h3 className=" text-2xl text-slate-700 text-center mt-6 mb-3">
        Thêm mới
      </h3>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá sản phẩm"
          name="price"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Hình ảnh"
          name="image"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="desc"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Giới tính"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Radio.Group>
            <Radio value="male">Nam</Radio>
            <Radio value="female">Nữ</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Danh mục" name="id_category">
          <Select placeholder="Select a option and change input text above">
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="1demo">Demo1</Select.Option>
            <Select.Option value="2demo">Demo2</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="text-white bg-blue-500"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
