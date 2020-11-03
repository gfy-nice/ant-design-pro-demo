import React from 'react';
import {GridContent} from '@ant-design/pro-layout';
// import {PageContainer} from '@ant-design/pro-layout';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  MessageOutlined,
  LikeOutlined,
  StarOutlined
} from '@ant-design/icons';
import {Row, Col, Card, Skeleton, List, Avatar, Space, Calendar, Badge} from 'antd';
import {useIntl} from "umi";

import styles from './home.less';


// xs	屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-
// sm	屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-
// md	屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-
// lg	屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-
// xl	屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-
// xxl	屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象


export default (): React.ReactNode => {
  const {Meta} = Card;

  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'https://ant.design',
      title: `ant design part ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: useIntl().formatMessage({id: 'home.card1.text13'}),
      content: useIntl().formatMessage({id: 'home.card1.text14'}),
    });
  }

  const IconText = ({icon, text}) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );


  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          {type: 'warning', content: 'This is warning event.'},
          {type: 'success', content: 'This is usual event.'},
        ];
        break;
      case 10:
        listData = [
          {type: 'warning', content: 'This is warning event.'},
          {type: 'success', content: 'This is usual event.'},
          {type: 'error', content: 'This is error event.'},
        ];
        break;
      case 15:
        listData = [
          {type: 'warning', content: 'This is warning event'},
          {type: 'success', content: 'This is very long usual event。。....'},
          {type: 'error', content: 'This is error event 1.'},
          {type: 'error', content: 'This is error event 2.'},
          {type: 'error', content: 'This is error event 3.'},
          {type: 'error', content: 'This is error event 4.'},
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content}/>
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }


  return (
    <GridContent>
      <React.Fragment>
        <Row gutter={24}>

          <Col xl={4} lg={12} md={12} sm={24} xs={24} className={styles.colbox}>
            <Card style={{height: "100%"}} title={useIntl().formatMessage({id: 'home.card1.title'})} bordered={false}>
              <p className={styles.text1}>{useIntl().formatMessage({id: 'home.card1.text1'})}</p>
              <p className={styles.text1}>{useIntl().formatMessage({id: 'home.card1.text2'})}</p>
              <p className={styles.text1}>{useIntl().formatMessage({id: 'home.card1.text3'})}</p>
              <p className={styles.text1}>{useIntl().formatMessage({id: 'home.card1.text2'})}</p>
              <p className={styles.text1}>{useIntl().formatMessage({id: 'home.card1.text3'})}</p>
            </Card>
          </Col>

          <Col xl={6} lg={12} md={12} sm={24} xs={24} className={styles.colbox}>
            <Card hoverable
                  className={styles.cardBox}
            >
              <img className={styles.cardimg} alt="example"
                   src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
              <img className={styles.cardimg} alt="example"
                   src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
              <img className={styles.cardimg} alt="example"
                   src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
              <Meta title={useIntl().formatMessage({id: 'home.card1.text4'})}
                    description={useIntl().formatMessage({id: 'home.card1.text5'})}/>
              <p className={styles.cardtext}>
                {useIntl().formatMessage({id: 'home.card1.text12'})}

              </p>
            </Card>
          </Col>

          <Col xl={7} lg={12} md={12} sm={24} xs={24} className={styles.colbox}>
            <Card style={{height: "40%"}} loading={false}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                }
                title={useIntl().formatMessage({id: 'home.card1.text6'})}
                description={useIntl().formatMessage({id: 'home.card1.text7'})}
              />
            </Card>
            <Card style={{height: "55%", marginTop: "5%"}}
                  actions={[
                    <SettingOutlined key="setting"/>,
                    <EditOutlined key="edit"/>,
                    <EllipsisOutlined key="ellipsis"/>,
                  ]}
            >
              <Skeleton loading={false} avatar active>
                <Meta
                  avatar={
                    <Avatar
                      src="https://wework.qpic.cn/bizmail/csjficOLhqqZxj2h99k0vOAWJQcaCNyk4EgsbXGNxkqPPrkHddobEgA/0"/>
                  }
                  title={useIntl().formatMessage({id: 'home.card1.text8'})}
                  description={useIntl().formatMessage({id: 'home.card1.text9'})}
                />
              </Skeleton>
            </Card>
          </Col>

          <Col xl={7} lg={12} md={12} sm={24} xs={24} className={styles.colbox}>
            <Card
              className={styles.cardBox}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting"/>,
                <EditOutlined key="edit"/>,
                <EllipsisOutlined key="ellipsis"/>,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                title={useIntl().formatMessage({id: 'home.card1.text10'})}
                description={useIntl().formatMessage({id: 'home.card1.text11'})}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col xl={8} lg={24} md={24} sm={24} xs={24} className={styles.colbox}>
            <Card style={{height: "100%"}} bordered={false}>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                dataSource={listData}
                footer={
                  <div>
                    <b>ant design</b> footer part
                  </div>
                }
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                      <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                      <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
                    ]}
                    extra={
                      <img
                        width={150}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar}/>}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xl={16} lg={24} md={24} sm={24} xs={24} className={styles.colbox}>
            <Card style={{height: "100%"}} bordered={false}>
              <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
            </Card>
          </Col>
        </Row>

        {/*<Row gutter={24}>*/}
        {/*  <Col xl={16} lg={24} md={24} sm={24} xs={24} style={{marginBottom: 24, background: "red"}}>*/}
        {/*  啊啊啊啊*/}
        {/*  </Col>*/}
        {/*  <Col xl={8} lg={24} md={24} sm={24} xs={24} style={{marginBottom: 24, background: "blue"}}>*/}
        {/*    2222*/}
        {/*  </Col>*/}
        {/*</Row>*/}

        {/*<Row gutter={24}>*/}
        {/*  <Col xl={8} lg={8} sm={24} xs={24} style={{marginBottom: 24, background: "pink"}}>*/}
        {/*    3333*/}
        {/*  </Col>*/}
        {/*  <Col xl={8} lg={8} sm={24} xs={24} style={{marginBottom: 24, background: "green"}}>*/}
        {/*    4444*/}
        {/*  </Col>*/}
        {/*  <Col xl={8} lg={8} sm={24} xs={24} style={{marginBottom: 24, background: "yellow"}}>*/}
        {/*    55555*/}
        {/*  </Col>*/}
        {/*</Row>*/}

      </React.Fragment>
    </GridContent>
  )
};
