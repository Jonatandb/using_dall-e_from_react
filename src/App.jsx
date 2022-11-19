import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Configuration, OpenAIApi } from 'openai'

function App() {
  const [phrase, setPhrase] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const inputRef = useRef()
  const config = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  })
  const openai = new OpenAIApi(config)

  const generateImage = async () => {
    setLoading(true)
    let res = null
    try {
      res = await openai.createImage({
        prompt: phrase,
        n: 1,
        size: '512x512',
      })
    } catch (e) {
      alert(
        'Your request was rejected as a result of our safety system. Your prompt may contain text that is not allowed by our safety system.',
      )
    } finally {
      res ? setResult(res.data.data[0].url) : setResult('')
      setLoading(false)
      setInputFocus()
    }
  }

  useEffect(() => {
    setInputFocus()
  }, [])

  const setInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className='App'>
      <h2>Generate an image using Open AI API</h2>
      <div className='card'>
        <textarea
          name='phrase'
          placeholder='Enter a phrase...'
          value={phrase}
          onChange={e => setPhrase(e.target.value)}
          ref={inputRef}
          rows={4}
          cols={45}
        />
        <br />
        <button onClick={generateImage}>Generate an image!</button>
        <br />
        {!loading && result.length > 0 ? (
          <img className='result-image' src={result} alt='result' />
        ) : (
          <></>
        )}
        {loading && <p>Loading...</p>}
      </div>
      <a className='bottom-text' href="https://github.com/Jonatandb" target="_blank">Jonatandb</a>
    </div>
  )
}

export default App

/*
car flying over a black hole inside white marble dreaming with clouds pitch dark
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-moBu0KsZdE7XRYB0JWXwPlcN.png?st=2022-11-18T22%3A42%3A04Z&se=2022-11-19T00%3A42%3A04Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T02%3A20%3A27Z&ske=2022-11-19T02%3A20%3A27Z&sks=b&skv=2021-08-06&sig=cGk5m1kHNuLZTjcLPd9yz6kflb0Qv/BaeaibVURm1uk%3D

A horse riding a cloud under a big yellow bridge
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-ZsqMt1vbY1qajH5Hd46NL9tt.png?st=2022-11-18T22%3A44%3A34Z&se=2022-11-19T00%3A44%3A34Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T22%3A37%3A40Z&ske=2022-11-19T22%3A37%3A40Z&sks=b&skv=2021-08-06&sig=tscAZ77ZmwAR9ejsqKnCf3Nk7xc0uPDzV/017H65XG8%3D

A monkey teaching the atomik teory to another monkey
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-ImcnzvZLrHtlv5kxvwu9C3hu.png?st=2022-11-18T22%3A46%3A35Z&se=2022-11-19T00%3A46%3A35Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T03%3A10%3A55Z&ske=2022-11-19T03%3A10%3A55Z&sks=b&skv=2021-08-06&sig=C2lDdnfeAa13Sv6CJWvJqQLoCUqRFB9kmJx5Go6O/Nw%3D

Slash playing a guitar solo in the top of eiffel tower
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-0VlSRYjkFp0cganZkB4fnGUG.png?st=2022-11-18T22%3A49%3A35Z&se=2022-11-19T00%3A49%3A35Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T04%3A09%3A28Z&ske=2022-11-19T04%3A09%3A28Z&sks=b&skv=2021-08-06&sig=/Di0S1c07HnpHd7hFl4N3knreM0%2BeqZsm7RepkjdhxE%3D
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-RiA3cBqZPmlj742PpmdvDnlB.png?st=2022-11-18T22%3A52%3A38Z&se=2022-11-19T00%3A52%3A38Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T05%3A07%3A21Z&ske=2022-11-19T05%3A07%3A21Z&sks=b&skv=2021-08-06&sig=QRiinOyaWpLlIPlo2Zt/nmbOtDoW7UgI9g8zcHk/1e0%3D

Jerry Seinfeld kissing Rachel green
  "Your request was rejected as a result of our safety system. Your prompt may contain text that is not allowed by our safety system."

John lennon kicking the pope from behind
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-5zHpWtD7388BVGk6g0XpEV7S.png?st=2022-11-18T22%3A57%3A43Z&se=2022-11-19T00%3A57%3A43Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T02%3A42%3A55Z&ske=2022-11-19T02%3A42%3A55Z&sks=b&skv=2021-08-06&sig=iRIorMlMzoWYbF/UKUQO6gwMkgspvTJpneYKTdB/KvU%3D
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-FPfRKaXzcvutUY67ybaEPlx7.png?st=2022-11-18T22%3A58%3A21Z&se=2022-11-19T00%3A58%3A21Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T02%3A38%3A25Z&ske=2022-11-19T02%3A38%3A25Z&sks=b&skv=2021-08-06&sig=ruTx3GswzewOzp7Z1jlAInG5e08gD5jt7/Y51clsNrw%3D

Dog barking to Madonna
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-oKztvGjAFdT7ELuTjUlo9tzZ.png?st=2022-11-18T23%3A01%3A47Z&se=2022-11-19T01%3A01%3A47Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T02%3A25%3A46Z&ske=2022-11-19T02%3A25%3A46Z&sks=b&skv=2021-08-06&sig=sLHcOG/dbTOGtc5OMIRwhbrFz7jkLLgQkRMo6lA0vaM%3D

Entering the matrix
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-Alv9a9O3BIy3Yz0Q6qf5gixG.png?st=2022-11-18T23%3A05%3A53Z&se=2022-11-19T01%3A05%3A53Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T02%3A26%3A17Z&ske=2022-11-19T02%3A26%3A17Z&sks=b&skv=2021-08-06&sig=0jv9MSyik6gkkTcUjBT3hyHK402QGIVbC5ZU3/08I0k%3D

Mad guy kicking bottle
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-YbVeodS1fqsECs8mOMmoAWvf.png?st=2022-11-18T23%3A08%3A53Z&se=2022-11-19T01%3A08%3A53Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T02%3A38%3A06Z&ske=2022-11-19T02%3A38%3A06Z&sks=b&skv=2021-08-06&sig=zqjOfjDOgoLlVfLyx1toC%2BHxHzVGdCrkRqxGoIvObqo%3D

A wild black hole thinking about an apple falling between tomato crystal bars
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-wDbV93UWFnUlQiM72I2FOFTo.png?st=2022-11-18T23%3A24%3A31Z&se=2022-11-19T01%3A24%3A31Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T04%3A43%3A55Z&ske=2022-11-19T04%3A43%3A55Z&sks=b&skv=2021-08-06&sig=SovpDE/j%2BJjzR6x0mB6Y2%2BFibKRcTHD7wlLtB4j%2BFjk%3D

Giant gas planet thinking about the matrix
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-tUA0MdbdOXR8ClLK2N4y9fYw.png?st=2022-11-18T23%3A30%3A28Z&se=2022-11-19T01%3A30%3A28Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T02%3A26%3A03Z&ske=2022-11-19T02%3A26%3A03Z&sks=b&skv=2021-08-06&sig=tuNktnhuX2OwdM7Qy7Db4NVsOglhkPFLd/be6SXjlSo%3D

Asimov thinking about end of humanity by robots
  https://oaidalleapiprodscus.blob.core.windows.net/private/org-dD5nIxmpDm6aha55lKsghSGu/user-JWKgO0BkiHbPo41wDfP80Ubl/img-kqSehywziSDFKUQ68Mf0kAru.png?st=2022-11-18T23%3A31%3A16Z&se=2022-11-19T01%3A31%3A16Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-18T02%3A54%3A32Z&ske=2022-11-19T02%3A54%3A32Z&sks=b&skv=2021-08-06&sig=UPNa7X3Ml5QBOr1YDELtlFKcKKhkFR0aNluoj8LAbRM%3D

*/