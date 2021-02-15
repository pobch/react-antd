import React, { useState } from 'react'
import { Layout, Button, Drawer, Menu } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import './App.less'

function SideBar({ menus }: { menus: React.ReactElement }) {
  return (
    <Layout.Sider
      breakpoint="sm"
      collapsedWidth={0}
      trigger={null}
      style={{ overflow: 'auto', height: '100vh', position: 'sticky', left: 0, top: 0 }}
    >
      {menus}
    </Layout.Sider>
  )
}

function NavBar({
  renderMenus,
}: {
  renderMenus: (setVisible: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactElement
}) {
  const [visible, setVisible] = useState(false)

  return (
    <nav>
      <Button type="primary" icon={<MenuOutlined />} onClick={() => setVisible(true)} />
      <Drawer title="Topics" placement="left" onClose={() => setVisible(false)} visible={visible}>
        {renderMenus(setVisible)}
      </Drawer>
      Pobby
    </nav>
  )
}

function TopicMenus({
  topics,
  selectedKey,
  changeSelectedKey,
}: {
  topics: string[]
  selectedKey: string
  changeSelectedKey: (e: any) => void
}) {
  return (
    <Menu onClick={changeSelectedKey} selectedKeys={[selectedKey]}>
      {topics.map((topic, index) => {
        return <Menu.Item key={index}>{topic}</Menu.Item>
      })}
    </Menu>
  )
}

function App() {
  const topics = ['First Topic', 'Second Topic', 'Third Topic', '4 Topic', '5 Topic', '6 Topic']
  const [contentIndex, setContentIndex] = useState(0)
  const [selectedKey, setSelectedKey] = useState('0')
  function changeSelectedKey(e: { key: string }) {
    const { key } = e
    setSelectedKey(key)
    setContentIndex(+key)
  }
  return (
    <div>
      <Layout.Header style={{ backgroundColor: 'white' }}>
        <NavBar
          renderMenus={(setVisible) => (
            <TopicMenus
              topics={topics}
              selectedKey={selectedKey}
              changeSelectedKey={(e) => {
                setVisible(false)
                changeSelectedKey(e)
              }}
            />
          )}
        />
      </Layout.Header>
      <Layout>
        <SideBar
          menus={
            <TopicMenus
              topics={topics}
              selectedKey={selectedKey}
              changeSelectedKey={changeSelectedKey}
            />
          }
        />
        <Layout.Content>{topics[contentIndex]}</Layout.Content>
      </Layout>
    </div>
  )
}

export default App
