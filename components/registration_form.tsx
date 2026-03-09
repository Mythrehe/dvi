'use client';

import React from 'react';
import { 
  Form, 
  Input, 
  Row, 
  Col, 
  DatePicker, 
  Select, 
  Radio, 
  Button, 
  Typography, 
  ConfigProvider,
  Space
} from 'antd';
import dayjs from 'dayjs';

interface FormValues {
  candidateName?: string;
  mobile?: string;
  email?: string;
  applicationDate?: dayjs.Dayjs;
  fatherName?: string;
  parentsPhone?: string;
  education?: string;
  dob?: dayjs.Dayjs;
  city?: string;
  state?: string;
  country?: string;
  address?: string;
  course?: string;
  gender?: string;
  passportPhoto?: File;
  tenthMarksheet?: File;
  twelfthMarksheet?: File;
  declaration?: boolean;
}

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const RegisterForm = () => {
  const [form] = Form.useForm();
  const brandOrange = '#ffa800';

  const courses = [
    'Diploma in Health Assistant (Nursing)',
    'Diploma in Medical Lab Technician',
    'Diploma in Operation Theatre Technician',
    'Diploma in Physiotherapy',
    'Diploma in X-Ray Technician',
    'Diploma in Dental Technician',
    'Diploma in Eye Technician'
  ];

  const educationList = [
    'SSLC / 10th Standard',
    'HSC / 12th Standard',
    'Degree / Graduation',
    'Other'
  ];

  const onFinish = (values: FormValues) => {
    console.log('Form Submitted:', values);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: brandOrange,
          borderRadius: 2,
        },
      }}
    >
      <section style={{ background: '#fff', padding: '60px 20px', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <Space align="center" style={{ marginBottom: '10px' }}>
            <div style={{ width: '20px', height: '2px', background: brandOrange }} />
            <Text style={{ color: '#6d757d', fontWeight: 600, letterSpacing: '2px', fontSize: '12px' }}>
              CANDIDATE
            </Text>
          </Space>
          <Title level={1} style={{ fontSize: '42px', fontWeight: 800, marginTop: 0, marginBottom: '40px' }}>
            Register Form
          </Title>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ applicationDate: dayjs() }}
            requiredMark={false}
          >
            <Row gutter={[24, 0]}>
              {/* Row 1: Candidate Name */}
              <Col span={24}>
                <Form.Item 
                  name="candidateName" 
                  label={<Text strong>Name of the Candidate (பெயர்)</Text>}
                  rules={[{ required: true, message: 'Please enter name' }]}
                >
                  <Input size="large" style={{ height: '50px' }} />
                </Form.Item>
              </Col>

              {/* Row 2: Mobile, Email, App Date */}
              <Col xs={24} md={8}>
                <Form.Item 
                  name="mobile" 
                  label={<Text strong>Mobile (கைபேசி எண்)</Text>}
                  rules={[{ required: true, message: 'Please enter mobile number' }]}
                >
                  <Input size="large" style={{ height: '50px' }} />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item 
                  name="email" 
                  label={<Text strong>Email* (மின்னஞ்சல்)</Text>}
                  rules={[
                    { required: true, message: 'Please enter email' },
                    { type: 'email', message: 'Please enter valid email' }
                  ]}
                >
                  <Input size="large" style={{ height: '50px' }} />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item 
                  name="applicationDate" 
                  label={<Text strong>Application Date (விண்ணப்ப தேதி)</Text>}
                  rules={[{ required: true, message: 'Please select application date' }]}
                >
                  <DatePicker size="large" style={{ width: '100%', height: '50px' }} format="DD/MM/YYYY" disabled />
                </Form.Item>
              </Col>

              {/* Row 3: Father Name, Education (Replaced Reference), DOB */}
              <Col xs={24} md={8}>
                <Form.Item 
                  name="fatherName" 
                  label={<Text strong>Father name (தந்தை பெயர்)</Text>}
                  rules={[{ required: true, message: 'Please enter father name' }]}
                >
                  <Input size="large" style={{ height: '50px' }} />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item 
                  name="education" 
                  label={<Text strong>Educational Qualification (கல்வித் தகுதி)</Text>}
                  rules={[{ required: true, message: 'Please select educational qualification' }]}
                >
                  <Select size="large" placeholder="Select Qualification" style={{ height: '50px' }}>
                    {educationList.map(item => <Option key={item} value={item}>{item}</Option>)}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item 
                  name="dob" 
                  label={<Text strong>Date of Birth (பிறந்த தேதி)</Text>}
                  rules={[{ required: true, message: 'Please select date of birth' }]}
                >
                  <DatePicker size="large" style={{ width: '100%', height: '50px' }} placeholder="dd-mm-yyyy" format="DD-MM-YYYY" />
                </Form.Item>
              </Col>

              {/* Row 4: City, State, Country */}
              <Col xs={24} md={8}>
                <Form.Item 
                  name="city" 
                  label={<Text strong>City (நகரம்)</Text>}
                  rules={[{ required: true, message: 'Please enter city' }]}
                >
                  <Input size="large" style={{ height: '50px' }} />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item 
                  name="state" 
                  label={<Text strong>State (மாநிலம்)</Text>}
                  rules={[{ required: true, message: 'Please enter state' }]}
                >
                  <Input size="large" style={{ height: '50px' }} />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item 
                  name="country" 
                  label={<Text strong>Country (நாடு)</Text>}
                  rules={[{ required: true, message: 'Please enter country' }]}
                >
                  <Input size="large" style={{ height: '50px' }} />
                </Form.Item>
              </Col>

              {/* Row 5: Address and Parent's Phone */}
              <Col xs={24} md={16}>
                <Form.Item 
                  name="address" 
                  label={<Text strong>Address (முகவரி)</Text>}
                  rules={[{ required: true, message: 'Please enter address' }]}
                >
                  <TextArea rows={3} style={{ borderRadius: '2px' }} />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item 
                  name="parentsPhone" 
                  label={<Text strong>Parent's Phone Number (பெற்றார்களின் தொலைபேசி எண்)</Text>}
                  rules={[{ required: true, message: 'Please enter parent phone number' }]}
                >
                  <Input size="large" style={{ height: '50px' }} />
                </Form.Item>
              </Col>
            </Row>

            {/* Row 6: Course and Gender */}
            <Row gutter={[24, 0]}>
              <Col xs={24} md={16}>
                <Form.Item 
                  name="course" 
                  label={<Text strong>Select Course (பாடத்தைத் தேர்ந்தெடுக்கவும்)</Text>}
                  rules={[{ required: true, message: 'Please select a course' }]}
                >
                  <Select size="large" placeholder={<span style={{ color: 'red' }}>Choose ...</span>} style={{ height: '50px' }}>
                    {courses.map((course, idx) => (
                      <Option key={idx} value={course}>{course}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item 
                  name="gender" 
                  label={<Text strong>Gender (பாலினம்)</Text>}
                  rules={[{ required: true, message: 'Please select gender' }]}
                >
                  <Radio.Group style={{ marginTop: '10px' }}>
                    <Radio value="male">Male (ஆண்)</Radio>
                    <Radio value="female">Female (பெண்)</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>

            {/* Row 7: Document Uploads */}
            <Row gutter={[24, 0]} style={{ marginTop: '30px' }}>
              <Col xs={24} md={8}>
                <Form.Item 
                  name="passportPhoto" 
                  label={<Text strong>Passport Size Photo(பாஸ்போர்ட் அளவு புகைப்படம்)</Text>}
                  rules={[{ required: true, message: 'Please upload passport size photo' }]}
                >
                  <input
                    type="file"
                    accept="image/*"
                    style={{ 
                      width: '100%', 
                      height: '50px', 
                      border: '1px solid #d9d9d9', 
                      borderRadius: '2px',
                      padding: '10px',
                      fontSize: '14px'
                    }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item 
                  name="tenthMarksheet" 
                  label={<Text strong>10th Marksheet(10-ஆம் வகுப்பு மதிப்பெண் சான்றிதழ்)</Text>}
                  rules={[{ required: true, message: 'Please upload 10th marksheet' }]}
                >
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    style={{ 
                      width: '100%', 
                      height: '50px', 
                      border: '1px solid #d9d9d9', 
                      borderRadius: '2px',
                      padding: '10px',
                      fontSize: '14px'
                    }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item 
                  name="twelfthMarksheet" 
                  label={<Text strong>12th Marksheet(12-ஆம் வகுப்பு மதிப்பெண் சான்றிதழ்)</Text>}
                  rules={[{ required: true, message: 'Please upload 12th marksheet' }]}
                >
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    style={{ 
                      width: '100%', 
                      height: '50px', 
                      border: '1px solid #d9d9d9', 
                      borderRadius: '2px',
                      padding: '10px',
                      fontSize: '14px'
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Declaration Checkbox */}
            <Row style={{ marginTop: '20px' }}>
              <Col span={24}>
                <Form.Item 
                  name="declaration"
                  valuePropName="checked"
                  rules={[
                    { 
                      required: true, 
                      message: 'You must declare that the provided information is true' 
                    }
                  ]}
                >
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" style={{ marginTop: '4px' }} />
                    <Text style={{ fontSize: '14px', lineHeight: '1.5' }}>
                      I hereby declare that the information provided above is true and correct to the best of my knowledge. 
                      I understand that any false information may lead to the cancellation of my admission.(மேலே குறிப்பிட்டுள்ள தகவல்கள் அனைத்தும் எனது அறிவிற்கு எட்டிய வரையில் உண்மையானவை மற்றும் சரியானவை என்று உறுதியளிக்கிறேன். தவறான தகவல் அளிக்கப்பட்டால், எனது சேர்க்கை ரத்து செய்யப்படலாம் என்பதை நான் புரிந்து கொள்கிறேன்.)
                    </Text>
                  </label>
                </Form.Item>
              </Col>
            </Row>

            <div style={{ marginTop: '30px' }}>
              <Button 
                type="primary" 
                htmlType="submit"
                size="large"
                style={{ 
                  background: brandOrange, 
                  borderColor: brandOrange, 
                  height: '55px', 
                  padding: '0 80px', 
                  fontWeight: 700,
                  fontSize: '18px',
                  textTransform: 'uppercase',
                  borderRadius: '2px'
                }}
              >
                REGISTER NOW
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default RegisterForm;