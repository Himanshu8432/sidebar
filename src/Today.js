import React, { useState } from 'react';
import Layout from './layout';
import { Button, Col, Row, Statistic } from 'antd';
function Today() {
    const [count, SetCount] = useState(112893)
    function handleChanged() {
        SetCount(count + 1)
    }
    return (
        <Layout>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Active Users" value={count} />
                </Col>
                <Col span={12}>
                    <Statistic title="Account Balance (CNY)" value={count} precision={2} />
                    <Button onClick={handleChanged}
                        style={{
                            marginTop: 16,
                        }}
                        type="primary"
                    >
                        Recharge
                    </Button>
                </Col>
                <Col span={12}>
                    <Statistic title="Active Users" value={count} loading />
                </Col>
            </Row>
        </Layout>

    )
}

export default Today