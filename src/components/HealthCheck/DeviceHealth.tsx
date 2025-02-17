import DiagnosticSummaryCard from '../DiagnosticSummaryCard/DiagnosticSummaryCard'
import { DiagnosticRate, DiagnosticType } from '../../constants/enums'
import DiagnosticCard from '../DiagnosticCard/DiagnosticCard'
import useDeviceDiagnostics from '../../hooks/useDeviceDiagnostics'
import { useTranslation } from 'react-i18next'

const DeviceHealth = () => {
  const { t } = useTranslation()
  const {
    totalDiskSpace,
    diskUtilization,
    diskStatus,
    totalMemory,
    memoryUtilization,
    ramStatus,
    cpuUtilization,
    cpuStatus,
  } = useDeviceDiagnostics()

  return (
    <div className='w-full md:h-24 flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-2'>
      <DiagnosticSummaryCard type={DiagnosticType.DEVICE} rate={DiagnosticRate.FAIR} />
      <DiagnosticCard
        size='health'
        title={t('disk')}
        metric={`${totalDiskSpace.toFixed(1)}GB`}
        subTitle={t('utilization', { percent: diskUtilization })}
        status={diskStatus}
      />
      <DiagnosticCard
        size='health'
        title={t('cpu')}
        metric='- GHZ'
        subTitle={t('utilization', { percent: cpuUtilization })}
        status={cpuStatus}
      />
      <DiagnosticCard
        size='health'
        title={t('ram')}
        metric={`${totalMemory.toFixed(1)}GB`}
        subTitle={t('utilization', { percent: memoryUtilization })}
        status={ramStatus}
      />
    </div>
  )
}

export default DeviceHealth
