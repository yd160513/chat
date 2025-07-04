import { useSelector } from 'react-redux'
import { selectValue } from '@renderer/store/mainSlice'

export default function Layout() {
  const value = useSelector(selectValue)

  return (
    <div className="fda">
      layout component - {value}
      </div>
  )
}
