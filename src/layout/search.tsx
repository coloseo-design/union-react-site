/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect } from 'react';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  SearchBox,
  Configure,
  Highlight,
} from 'react-instantsearch-dom';
import { connectHits } from 'react-instantsearch-core';
import { useHistory } from 'react-router';

const [appId, apiKey, indexName] = [
  'PQHNASWN7G',
  'cb723f02acdb7e8ff5248c2028014b51',
  'union_react_site',
];

type HitType = {
  anchor: string;
  data: { [key: string]: string };
  dirName: string;
  name: string;
  objectID: string;
};

type HitProps = {
  hits: HitType[],
  changeTarget?: any,
};

const SearchHits = connectHits((props: HitProps) => {
  const { hits, changeTarget } = props;
  const history = useHistory();
  if (hits.length === 0) {
    return (
      <div className="hits">
        <div style={{ alignSelf: 'center' }}>没有要搜索的内容</div>
      </div>
    );
  }

  return (
    <div className="hits">
      {hits.map((hit) => (
        <div key={hit.objectID} className="hit">
          <div className="hit-content">
            <div
              className="name"
              onClick={() => {
                history.push(`/develop/components/${hit.dirName}`);
                changeTarget('develop');
              }}
            >
              <Highlight hit={hit} attribute="name" />
            </div>
            <div
              className="content"
              onClick={() => {
                history.push(`/develop/components/${hit.dirName}#${hit.anchor}`);
                changeTarget('develop');
              }}
            >
              {hit.data?.lvl0 && <div className="lvl0"><Highlight hit={hit} attribute="data.lvl0" /></div>}
              {hit.data?.lvl1 && <div className="lvl1"><Highlight hit={hit} attribute="data.lvl1" /></div>}
              {hit.data?.lvl2 && <div className="lvl2"><Highlight hit={hit} attribute="data.lvl2" /></div>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

const client = algoliasearch(appId, apiKey);

const getSearchPopup = (): HTMLDivElement | null => {
  const dom = document.getElementsByClassName('apidoc-search-popup') || [];
  if (dom.length === 0) return null;
  const div = dom[0] as HTMLDivElement;
  return div;
};

type SearchProps = {
  changeTarget: any;
};

const Search = memo((props: SearchProps) => {
  const [value, $value] = React.useState('');
  const searchBoxEvent = {
    onFocus: () => {
      const div = getSearchPopup();
      div && (div.style.visibility = 'visible');
    },
    onBlur: () => {
      setTimeout(() => {
        const div = getSearchPopup();
        div && (div.style.visibility = 'hidden');
      }, 300);
    },
    translations: {
      placeholder: '在设计系统中搜索',
    },
    onChange: (e: any) => {
      $value(e.target.value);
    },
  } as any;

  useEffect(() => {
    const div = getSearchPopup();
    div && (div.style.visibility = 'hidden');
  }, []);

  return (
    <InstantSearch
      searchClient={client}
      indexName={indexName}
    >
      <SearchBox {...searchBoxEvent} />
      <Configure hitsPerPage={5} />
      {value && (
      <div className="apidoc-search-popup">
        <SearchHits changeTarget={props.changeTarget} />
      </div>
      )}
    </InstantSearch>
  );
});

export default Search;
