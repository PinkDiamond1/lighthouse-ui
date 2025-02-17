import { ReactComponent as LightHouseFullLogo } from '../../assets/images/lightHouseFull.svg'
import { ReactComponent as SlasherLogo } from '../../assets/images/slasher.svg'
import { SyncMetricFallback } from '../SyncMetric/SyncMetric'
import Typography from '../Typography/Typography'
import Button, { ButtonFace } from '../Button/Button'
import Wallet from '../Wallet/Wallet'
import BeaconMetric from './BeaconMetric'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import ValidatorMetric from './ValidatorMetric';

const TopBar = () => {
  const { t } = useTranslation()
  return (
    <div className='w-full h-14 border-b bg-white dark:bg-dark750 border-borderLight dark:border-dark800 flex justify-between'>
      <div className='flex h-full'>
        <div className='items-center hidden lg:flex w-42 border-r border-borderLight dark:border-borderDark px-4'>
          <LightHouseFullLogo className='w-full text-black dark:text-white' />
        </div>
        <Suspense fallback={<SyncMetricFallback/>}>
          <ValidatorMetric/>
        </Suspense>
        <Suspense fallback={<SyncMetricFallback />}>
          <BeaconMetric />
        </Suspense>
        <div className='hidden w-24 border-r border-borderLight dark:border-dark800 p-2'>
          <div className='flex-1 space-y-2'>
            <Typography family='font-roboto' type='text-tiny'>
              {t('slasher')}
            </Typography>
            <Typography
              color='text-primary'
              darkMode='dark:text-white'
              isBold
              type='text-caption1'
              family='font-roboto'
            >
              {t('live')}
            </Typography>
          </div>
          <SlasherLogo className='w-6 h-6 text-primary' />
        </div>
      </div>
      <div className='h-full flex'>
        <Wallet className='hidden lg:flex opacity-20' borderStyle='border-l' />
        <Button
          className='hidden md:block items-center border-l border-borderLight dark:border-borderDark'
          type={ButtonFace.ICON}
        >
          <i className='bi bi-clock-history text-2xl text-dark300' />
        </Button>
        <Button
          className='hidden md:block items-center border-l border-borderLight dark:border-borderDark'
          type={ButtonFace.ICON}
        >
          <i className='bi bi-bell-fill text-2xl text-dark300' />
        </Button>
        <div className='h-full w-8 bg-gradient-to-b from-primary to-secondary flex items-center justify-center cursor-pointer'>
          <i className='bi bi-three-dots-vertical text-white text-3xl' />
        </div>
      </div>
    </div>
  )
}

export default TopBar
