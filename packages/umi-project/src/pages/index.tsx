import yayJpg from '../assets/yay.jpg';
import { add } from '@derek/utils';
import { PrimaryButton  } from '@derek/components'

export default function HomePage() {
  return (
    <div>
      <PrimaryButton></PrimaryButton>
      <>{add(1, 2)}</>
      
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
