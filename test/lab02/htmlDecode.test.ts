import {expect} from 'chai'
import {decodeHtml} from '../../labs/lab02/htmlDecode/htmlDecode'

describe('htmlDecode: ', () => {
    describe('function decodeHtml', function () {

        it('String "Cat &lt;says&gt; &quot;Meow&quot;. M&amp;M&apos;s" and should be return "Cat <says> "Meow". M&M’s"', () => {
            expect(decodeHtml('Cat &lt;says&gt; &quot;Meow&quot;. M&amp;M&apos;s')).eql(`Cat <says> "Meow". M&M's`)
        })

        it('String "Cat &lt;&lt;&lt;says&gt; &quot;Meow&quot;. M&amp;M&apos;s" should be return "Cat <<<says> "Meow". M&M’s"', () => {
            expect(decodeHtml('Cat &lt;&lt;&lt;says&gt; &quot;Meow&quot;. M&amp;M&apos;s')).eql(`Cat <<<says> "Meow". M&M's`)
        })

        it(`String &amp;lt; should be return &lt;`, () => {
            expect(decodeHtml(`&amp;lt;`)).eql(`&lt;`)
        })

        it('"" and should be return ""', () => {
            expect(decodeHtml('')).eql('')
        })

        it('A string without special characters should not be decoded', () => {
            expect(decodeHtml(`123`)).eql('123')
        })

        it('A string of special characters only should be decoded', () => {
            expect(decodeHtml(`&amp;&quot;&apos;&lt;&gt;!@#$%^&lt;&gt;&amp;//`)).eql(`&"'<>!@#$%^<>&//`)
        })
    })
})