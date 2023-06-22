import { useDispatch } from 'react-redux'
import { TABS } from '../redux/actions/types'
import { switchTabs } from '../redux/actions/taskActions'
const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch()
  return TABS.map((tab) => (
    <button
      className={
        tab === currentTab
          ? 'tab-btn my-0 mx-2.5 selected'
          : 'tab-btn my-0 mx-2.5'
      }
      onClick={() => dispatch(switchTabs(tab))}
    >
      {tab}
    </button>
  ))
}
export default Tabs
