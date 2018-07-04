import React from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  Input,
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Row,
  Col
} from 'antd'

import { payment } from '../reducers'

const { actions } = payment

const FormItem = Form.Item
const Option = Select.Option
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const mapStateToProps = null
const mapDispatchToProps = dispatch => bindActionCreators({
  paid: actions.paid
}, dispatch)

class PaymentContainer extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const { form, paid, history } = this.props

    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        paid({
          number: values.creditCard
        })

        history.push('/checkout/complete')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    return (
      <Row>
        <Col span={12} offset={6}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="Credit Card"
            >
              {getFieldDecorator('creditCard', {
                rules: [
                  { required: true, message: 'Please fill credit card' },
                ],
              })(
                <Input placeholder="XXXX-XXXX-XXXX-XXXX" />
              )}
            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit">Checkout</Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  Form.create(),
)(PaymentContainer)
