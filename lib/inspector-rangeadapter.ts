import * as T from './types';
import * as AST from './ast';
import * as Tokenizer from './tokenizer';
import * as NodeNames from './nodenames';
import * as CSSUtilities from './utilities';

class RangeAdapter {
  static StyleSheet(styleSheet: AST.StyleSheet): T.ISourceRange {
    return styleSheet.range;
  }

  static DeclarationList(declarations: AST.DeclarationList): T.ISourceRange {
    const lenDeclarations = declarations.getLength();
    let firstRange = declarations.range;
    let lastRange = declarations.range;
    const lbrace = declarations.getLBrace();
    const rbrace = declarations.getRBrace();
    const firstTrailing = lbrace?.trailingTrivia;
    let firstLeading: Tokenizer.Token[];
    let lastLeading: Tokenizer.Token[];
    let lastTrailing: Tokenizer.Token[];
    let tokens: Tokenizer.Token[];
    let firstToken: Tokenizer.Token;
    let lastToken: Tokenizer.Token;
    let lenTokens: number;

    if (firstTrailing && firstTrailing.length > 0) {
      firstRange = firstTrailing[0].range;
    } else if (lenDeclarations === 0 && lbrace) {
      firstRange = new AST.SourceRange(
        lbrace.range.endLine,
        lbrace.range.endColumn,
        0,
        0,
      );
    } else if (lenDeclarations > 0) {
      const firstDeclaration = declarations.getDeclaration(0);
      if (firstDeclaration) {
        tokens = firstDeclaration.getTokens();
        if (tokens.length > 0) {
          firstToken = tokens[0];
          firstLeading = firstToken.leadingTrivia;

          if (firstLeading && firstLeading.length > 0) {
            firstRange = firstLeading[0].range;
          } else {
            firstRange = firstToken.range;
          }
        }
      }
    }

    lastLeading = rbrace?.leadingTrivia;
    if (lastLeading && lastLeading.length > 0) {
      lastRange = lastLeading[lastLeading.length - 1].range;
    } else if (lenDeclarations === 0 && rbrace) {
      lastRange = new AST.SourceRange(
        0,
        0,
        rbrace.range.startLine,
        rbrace.range.startColumn,
      );
    } else if (lenDeclarations > 0) {
      const lastDeclaration = declarations.getDeclaration(lenDeclarations - 1);
      if (lastDeclaration) {
        tokens = lastDeclaration.getTokens();
        lenTokens = tokens.length;

        if (lenTokens > 0) {
          lastToken = tokens[lenTokens - 1];
          lastTrailing = lastToken.trailingTrivia;

          if (lastTrailing && lastTrailing.length > 0) {
            lastRange = lastTrailing[lastTrailing.length - 1].range;
          } else {
            lastRange = lastToken.range;
          }
        }
      }
    }

    return new AST.SourceRange(
      firstRange.startLine,
      firstRange.startColumn,
      lastRange.endLine,
      lastRange.endColumn,
    );
  }

  static Token(token: Tokenizer.Token): T.ISourceRange {
    return getNoTriviaRange(token);
  }

  static default(node: AST.ASTNode): T.ISourceRange {
    const range = getNoTriviaRange(node);
    return range ? range : node.range;
  }
}
/**
 * Finds the range from "start" to "end", excluding any leading or trailing trivia.
 */
export function getNoTriviaRange(
  start: T.INode,
  end: T.INode = start,
): T.ISourceRange {
  var firstToken =
      start instanceof Tokenizer.Token
        ? <Tokenizer.Token>start
        : (<AST.ASTNode>start).getFirstToken(),
    lastToken =
      end instanceof Tokenizer.Token
        ? <Tokenizer.Token>end
        : (<AST.ASTNode>end).getLastToken(),
    range: T.ISourceRange,
    r: T.ISourceRange;

  if (!firstToken && !lastToken) return null;

  range = new AST.SourceRange(
    start.range.startLine,
    start.range.startColumn,
    end.range.endLine,
    end.range.endColumn,
  );

  if (firstToken) {
    if (firstToken.leadingTrivia && firstToken.leadingTrivia.length > 0) {
      // get the end of the leading trivia
      r = firstToken.leadingTrivia[firstToken.leadingTrivia.length - 1].range;
      range.startLine = r.endLine;
      range.startColumn = r.endColumn;
    } else {
      range.startLine = firstToken.range.startLine;
      range.startColumn = firstToken.range.startColumn;
    }
  }

  if (lastToken) {
    if (lastToken.trailingTrivia && lastToken.trailingTrivia.length > 0) {
      // get the start of the trailing trivia
      r = lastToken.trailingTrivia[0].range;
      range.endLine = r.startLine;
      range.endColumn = r.startColumn;
    } else {
      range.endLine = lastToken.range.endLine;
      range.endColumn = lastToken.range.endColumn;
    }
  }

  return range;
}

export function getRange(node: T.INode): T.ISourceRange {
  var adapter = RangeAdapter[NodeNames.getNodeName(node)];
  return adapter
    ? adapter(node)
    : node instanceof AST.ASTNode
      ? RangeAdapter.default(<AST.ASTNode>node)
      : node.range;
}

export function getText(node: T.INode, range: T.ISourceRange): string {
  return CSSUtilities.getTextFromRange(
    node.toString(),
    CSSUtilities.relativeRange(range, node.range),
  );
}
