import React, {Component} from 'react';
import {Button, Form, Input} from "antd";
import {connect} from 'dva'

@connect(({homeModel}) => ({homeModel}))
@Form.create()
class Home extends Component {
  loadData = () => {
    this.props.dispatch({
      type: 'homeModel/test'
    })
  };

  componentDidMount() {
    this.loadData()
  }


  render() {
    const {form, homeModel} = this.props;
    return (
      <div>
        <p>{homeModel.countnum}</p>
        <Button>{homeModel.countnum}</Button>
        <Form layout={"vertical"}>
          <Form.Item wrapperCol={{span: 13}} labelCol={{span: 8}} label={'测试'}>
            {
              form.getFieldDecorator('name',
                {
                  initialValue: homeModel.countnum
                })(<Input/>)
            }
          </Form.Item>
          <Form.Item label={'测试2'}>
            {
              form.getFieldDecorator('nam1e',
                {
                  initialValue: homeModel.countnum
                })(<Input/>)
            }
          </Form.Item>
          <Form.Item>
            <Button onClick={this.loadData}>提交</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Home;
