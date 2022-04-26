import styles from './shared-components.module.css';

/* eslint-disable-next-line */
export interface PageHeaderProps {
  siteTitle: string;
  children: React.ReactNode;
}

export function PageHeader(props: PageHeaderProps) {
  return (
    <header className={styles['container']} data-test-id="pageheader">
      <a rel="home" href="/">PageHeader</a>
      {props.children}
    </header>
  );
}

export default PageHeader;
