import './CertificationContent.css'

export default function CertificationContent({lista}) {
  return (
    <div className='content-list'>
      {lista?.map(conteudo => (
        <div className="flex items-center justify-center gap-2">
          <span className="bg-violet-800 h-2 w-2 rounded-full"></span>
          <p className="text-white text-sm">{conteudo}</p>
        </div>
      ))}
    </div>
  )
}