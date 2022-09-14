import { useState } from 'react';
import { Links, OwnedLabel, GenericLabelInterface } from '../../../../src/types';
import Link from 'next/link';
import { Snackbar } from '@mui/material';
import { BsGithub, BsTwitter, BsInstagram, BsGlobe2 } from 'react-icons/bs';
import { removeHttp } from '../../../../src/utils';


const colorProps = "bg-primary/10 text-primary"
const avaxColor = "bg-[#E84040]/80 text-white"
const ethColor = "bg-[#8a92b2]/20 text-[#454a75]"
const arColor = "bg-black text-white"
const iconProps = {width: 100, height: 100, color: "#1273ea"}

export const arLabels = (ownedLabels: OwnedLabel[]) => ownedLabels.map((owned: OwnedLabel) => {
  return {
    username: owned.label + '.ar',
    classes: arColor,
    canCopy: true,
    link_to: null,
    icon: <img
      width={20}
      height={20}
      className="bg-white rounded-full"
      src="https://cryptologos.cc/logos/arweave-ar-logo.svg?v=023"
      alt="" />,
    hovertext: `Scarcity: ${owned.scarcity}`
  }
}) || [];


export const avaxLabel = (AVVY:string|undefined) => {
  if (!AVVY) return null
  return {
    username: AVVY, classes: avaxColor,
    link_to: null,
    canCopy: true,
    icon: <img
      width={20}
      height={20}
      src="https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=023"
      alt=""
    />
  }
}

export const ethLabel = (ENS:string|undefined) => {
  if (!ENS) return null;
  return {
    username: ENS, classes: ethColor,
    link_to: null,
    canCopy: true,
    icon: <img
      height={13}
      width={13}
      src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=002"
      alt=""
    />
  }
}

export const getDefaultLabels = ({ ar, links, ENS, AVVY }: {ar: OwnedLabel[], links: Links, ENS: string|undefined, AVVY: string|undefined}) => [
  ...arLabels(ar),
  avaxLabel(AVVY),
  ethLabel(ENS),
  links?.twitter && {username: links.twitter, classes: colorProps,
    link_to: "https://twitter.com/" + links.twitter,
    canCopy: true,
    icon: <BsTwitter {...iconProps} />},
  links?.github && {username: links.github, classes: colorProps,
    link_to: "https://github.com/" + links.github,
    canCopy: true,
    icon: <BsGithub {...iconProps} />},
  links?.instagram && {username: links.instagram, classes: colorProps,
    link_to: "https://instagram.com/" + links.instagram,
    canCopy: true,
    icon: <BsInstagram {...iconProps}/>},
  links?.customUrl && {username: removeHttp(links.customUrl), classes: colorProps, 
    link_to: links.customUrl,
    canCopy: true,
    icon: <BsGlobe2 {...iconProps}/>},
].filter((l) => l !== null);


export const Labels = ({items}: {items: any}) => {
  return (
    <div className="flex flex-row carousel max-w-[100vw] space-x-2 py-2 max-h-[60px]">
      {items.map((item:any, index:number) => (
        <div key={index} className="carousel-item">
          {item}
        </div>
      ))}
    </div>
  );
};


export function GenericLabel ({username, classes, icon, link_to, canCopy}: GenericLabelInterface) {

  const [open, setOpen] = useState(false);
  const copy_text = (link: string) => {
    setOpen(true);
    navigator.clipboard.writeText(link);
  }

  const attrs = {
    onClick: canCopy ? () => copy_text(username || '') : undefined
  }

  const classnames = `${classes} px-2.5 py-2 font-bold text-sm rounded-2xl relative transition-opacity duration-300 hover:opacity-60 `;

  if (!username) return <></>
  return (
    <>
      <>
        {link_to ? (
          <Link href={link_to} passHref>
            <a target="_blank" rel="noopener noreferrer" {...attrs} className={classnames}>
              <div className='flex flex-row items-center space-x-1'>
                {icon}
                <h3 className="font-inter">
                  {username}
                </h3>
              </div>
            </a>
          </Link>
        ) : (
          <button {...attrs} className={classnames + " cursor-pointer"}>
            <div className='flex flex-row items-center space-x-1'>
              {icon}
              <h3 className="font-inter">
                {username}
              </h3>
            </div>
          </button>
        )}
      </>
      {canCopy && (
        <Snackbar
          message="Copied to clipboard"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          open={open}
        />
      )}
    </>
  )
}