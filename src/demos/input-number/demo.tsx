import React from 'react';
import { InputNumber } from 'union-design';
import Codeframe from '../../components/code-frame';

const handleChange = (value: string | number) => {
  console.log('--value', value);
};

const InputNumberDemo = (): React.ReactNode => (
  <div>
    <Codeframe
      rightCode={`
import React from 'react';
import { InputNumber } from 'union-design';

const handleChange = (value: string | number) => {
  console.log('--value', value);
};

const demo = () => (
  <div>
    lange:
    <InputNumber
      size="large"
      max={10}
      min={1}
      onChange={handleChange}
    />
    default:
    <InputNumber
      max={10}
      min={1}
      onChange={handleChange}
    />
    small:
    <InputNumber
      size="small"
      max={10}
      min={1}
      onChange={handleChange}
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          lange:
          <InputNumber
            size="large"
            max={10}
            min={1}
            onChange={handleChange}
          />
          default:
          <InputNumber
            max={10}
            min={1}
            onChange={handleChange}
          />
          small:
          <InputNumber
            size="small"
            max={10}
            min={1}
            onChange={handleChange}
          />
        </div>
      )}
      description={(
        <h3>不同大小</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { InputNumber } from 'union-design';

const demo = () => (
  <div>
    <InputNumber
      precision={2}
      formatter={(value) => \`\${value}%\`}
      parser={(value) => value.replace('%', '')}
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <InputNumber
            precision={2}
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace('%', '')}
          />
        </div>
      )}
      description={(
        <h3>规定展示格式</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { InputNumber } from 'union-design';

const demo = () => (
  <div>
    <InputNumber
      precision={2}
      step={0.1}
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <InputNumber
            precision={2}
            step={0.1}
          />
        </div>
      )}
      description={(
        <h3>保留小数位数</h3>
      )}
    />

    <Codeframe
      rightCode={`
import React from 'react';
import { InputNumber } from 'union-design';

const demo = () => (
  <div>
    <InputNumber
      size="large"
      value={10000}
      formatter={(value) => \`$ \${value}\`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => \`\${value}\`.replace(/\$\s?|(,*)/g, '')}
    />
  </div>
);
      `}
      rightDemo={(
        <div>
          <InputNumber
            size="default"
            value={10000}
            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => `${value}`.replace(/\$\s?|(,*)/g, '')}
          />
        </div>
      )}
      description={(
        <h3>解析配合 formatter</h3>
      )}
    />
  </div>
);

export default InputNumberDemo;
