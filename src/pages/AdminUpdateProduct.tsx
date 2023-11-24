// type Props = {};

import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Radio, Select, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { hiddenSpinner, showSpinner } from "../util/util";
import { https } from "../services/config";
import TextArea from "antd/es/input/TextArea";

const UpdateProduct: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const [form] = Form.useForm();

  const fetchCategoryes = async () => {
    showSpinner();
    try {
      hiddenSpinner();
      const categories = await https.get("/categories");
      setCategoriesList(categories.data.data);
    } catch (error) {
      console.log(error);
      hiddenSpinner();
    }
  };
  const fetchProduct = async () => {
    showSpinner();
    try {
      hiddenSpinner();
      const { data } = await https.get(`/products/${slug}`);
      const product: Product = data.data;
      form.setFieldsValue({
        name: product.name,
        price: product.price,
        image: product.images[0],
        desc: product.desc,
        gender: product.gender,
        id_category: product.id_category,
      });

      // setFormData({
      //   ...formData,
      //   name: product.name,
      //   desc: product.desc,
      //   images: product.images[0],
      //   price: product.price,
      //   gender: product.gender,
      //   id_category: product.id_category,
      // });
    } catch (error) {
      hiddenSpinner();
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
    fetchCategoryes();
  }, [slug]);

  const onFinish = (values: FormProductData) => {
    const data = {
      desc: values.desc,
      gender: values.gender,
      id_category: values.id_category,
      images: [values.image],
      name: values.name,
      price: values.price,
    };
    const putProduct = async () => {
      try {
        showSpinner();
        const res = await https.put(`/products/${slug}`, data);
        if (res) {
          message.success("Cập nhật sản phẩm thành công!");
          navigate("/admin/products");
          hiddenSpinner();
        }
      } catch (error) {
        hiddenSpinner();
        message.error(error.response.data.message);
        console.log(error);
      }
    };
    putProduct();
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-w-lg w-full mx-auto px-5 pb-5">
      <h3 className=" text-2xl text-slate-700 text-center mt-6 mb-3">
        Cập nhật
      </h3>
      <Form
        layout="vertical"
        form={form}
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
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá sản phẩm"
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Hình ảnh"
          name="image"
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="desc"
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Giới tính"
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <Radio.Group>
            <Radio value="male">Nam</Radio>
            <Radio value="female">Nữ</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Danh mục"
          name="id_category"
          rules={[{ required: true, message: "*Vui lòng nhập trường này!" }]}
        >
          <Select placeholder="--- Chọn ---">
            {categoriesList.map((category, index) => (
              <Select.Option key={index} value={category._id}>
                {category.categoryName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="text-white bg-yellow-500"
          >
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateProduct;
